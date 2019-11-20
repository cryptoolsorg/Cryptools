chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.create({
      url: 'https://cryptools.org/',
      active: true
    });
  
    return false;
  });

var coin = "BTC";

var apiKey = "21bb9daeacff6d5a91b09bb3a2a8da791ce56f90029c46abb53290334d614e1c";
var prices = {};

  function updatePrices(callback){
      
      $.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&api_key="+apiKey,function(res){
             prices.BTC = res.USD;	
          $.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key="+apiKey,function(res2){
                prices.ETH = res2.USD;		
             
            updateBadge();	
           if(callback){
               callback();
           }			   
      })
      })
  }
  
  
  function updateBadge(){
      var p = prices[coin];
      
      chrome.browserAction.setBadgeText({text:parseInt(p).toString()});
  }
  
  
  updatePrices();
  
  setTimeout(function(){
      updatePrices();	 
  },1000*60*1);

  /*Notification*/

  function computeAnomalies(){
    console.log(window.price_feed);
    var pct_change = Math.abs((window.current_price - window.last_price)*100/window.last_price);

    if(!window.anomaly_notified){
        chrome.storage.sync.get('anomaly_notify', function(data) {
            if (Notification.permission == "granted"){
                if(data.hasOwnProperty('anomaly_notify') && (data.anomaly_notify == true) && (window.price_feed.length > 0)){
                    var start_price = window.price_feed[0][0];
                    var end_price = window.price_feed[window.price_feed.length-1][0];
                    var start_time = window.price_feed[0][1];
                    var end_time = window.price_feed[window.price_feed.length-1][1];
                    if(moment.duration(end_time.diff(start_time)).seconds() > 60 * 50){
                        return;
                    }
                    if(Math.abs((end_price - start_price)*100/start_price) > 5){
                        var notification = new Notification('Bitcoin Price Alert!', {
                                  icon: 'http://www.freeiconspng.com/uploads/bitcoin-business-finance-marketing-icon-25.png',
                                  body: "Bitcoin's Price has changed more than " + 5 + " % in the last 30 minutes!",
                                }); 
                        window.price_feed = [];
                        notification.onclick = function () {
                            chrome.storage.sync.set({'isPopover': true}, function() {
                                chrome.windows.create({ url: "/popup.html", focused: true, type: 'popup', focused:true, height: 650, width:520 }, function(){});
                                window.close();
                            });
                        };
                        window.anomaly_notified = true;
                        setTimeout(function(){ window.anomaly_notified = false; }, 10*60*1000);
                    }
                }
            }
        });
    }

    chrome.storage.sync.get('pct_notify', function(data) {
        if (Notification.permission == "granted"){
            if(data.hasOwnProperty('pct_notify')){
                chrome.storage.sync.get('pct_notify_val', function(data2) {
                    if(!data2.hasOwnProperty('pct_notify_val')){
                        data2.pct_notify_val = "5";
                    }
                    if(data.pct_notify == true){
                        data2.pct_notify_val = Number(data2.pct_notify_val);
                        if((window.last_pct_notified_val == data2.pct_notify_val) && (window.pct_notified)){
                            return;
                        }
                        if(data2.pct_notify_val < pct_change){
                            var notification = new Notification('Bitcoin Price Alert!', {
                              icon: 'http://www.freeiconspng.com/uploads/bitcoin-business-finance-marketing-icon-25.png',
                              body: "Bitcoin's Price has changed more than " + data2.pct_notify_val + " % today!",
                            }); 
                            notification.onclick = function () {
                                chrome.storage.sync.set({'isPopover': true}, function() {
                                    chrome.windows.create({ url: "/popup.html", focused: true, type: 'popup', focused:true, height: 650, width:520 }, function(){});
                                    window.close();
                                });
                            };
                            window.last_pct_notified_val = data2.pct_notify_val;
                            window.pct_notified = true;
                        }
                    }
                });
            }
        }
    });
}


window.pct_notified = false;
window.anomaly_notified = false;

window.setInterval(
    function(){
        try
        {
            computeAnomalies();
        }
        catch(err){

        }
    }
, 10000);
  
  