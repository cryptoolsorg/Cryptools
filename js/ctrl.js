var app = angular.module('myApp', []);


app.controller('myCtrl', function($scope, $http) {

$scope.currency = ["US Dollar", "UK Pound", "Euro", "Rusian Ruble", "Japan Yen", "Swiss Franc", "Israeli Shekel", "Canadian Dollar","Australian Dollar","Brazilian Real","Indian Rupee","Indonesian Rupiah", "Turkish Lira", "Yuan Renminbi","Won","Vietnamese Dong","Argentine Peso","Mexican Peso"];
1
/*Cryptocompare API LINKS */

var ethUrl = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,JPY,EUR,GBP,RUB,TRY,ILS,CAD,AUD,BRL,INR,IDR,CNY,KRW,VND,ARS,MXN,CHF';//Ethereum

var ltcUrl = 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,JPY,EUR,GBP,RUB,TRY,ILS,CAD,AUD,BRL,INR,IDR,CNY,KRW,VND,ARS,MXN,CHF';//Litecoin

var xrpUrl = 'https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD,JPY,EUR,GBP,RUB,TRY,ILS,CAD,AUD,BRL,INR,IDR,CNY,KRW,VND,ARS,MXN,CHF';//Ripple

var btcpUrl = 'https://min-api.cryptocompare.com/data/price?fsym=BTCP&tsyms=USD,JPY,EUR,GBP,RUB,TRY,ILS,CAD,AUD,BRL,INR,IDR,CNY,KRW,VND,ARS,MXN,CHF';//Bitcoin Private

var bchUrl = 'https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD,JPY,EUR,GBP,RUB,TRY,ILS,CAD,AUD,BRL,INR,IDR,CNY,KRW,VND,ARS,MXN,CHF';//Bitcoin Cash

var usdtUrl = 'https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=USD,JPY,EUR,GBP,RUB,TRY,ILS,CAD,AUD,BRL,INR,IDR,CNY,KRW,VND,ARS,MXN,CHF';//Tether

var etcUrl = 'https://min-api.cryptocompare.com/data/price?fsym=ETC&tsyms=USD,JPY,EUR,GBP,RUB,TRY,ILS,CAD,AUD,BRL,INR,IDR,CNY,KRW,VND,ARS,MXN,CHF';//Ethereum Classic

var xmrUrl = 'https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=USD,JPY,EUR,GBP,RUB,TRY,ILS,CAD,AUD,BRL,INR,IDR,CNY,KRW,VND,ARS,MXN,CHF';//Monero

var dashUrl = 'https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=USD,JPY,EUR,GBP,RUB,TRY,ILS,CAD,AUD,BRL,INR,IDR,CNY,KRW,VND,ARS,MXN,CHF';//Dash

var btcUrl = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR,GBP,RUB,TRY,ILS,CAD,AUD,BRL,INR,IDR,CNY,KRW,VND,ARS,MXN,CHF';//Bitcoin

var xlmUrl = 'https://min-api.cryptocompare.com/data/price?fsym=XLM&tsyms=USD,JPY,EUR,GBP,RUB,TRY,ILS,CAD,AUD,BRL,INR,IDR,CNY,KRW,VND,ARS,MXN,CHF';//Stellar

var eosUrl = 'https://min-api.cryptocompare.com/data/price?fsym=EOS&tsyms=USD,JPY,EUR,GBP,RUB,TRY,ILS,CAD,AUD,BRL,INR,IDR,CNY,KRW,VND,ARS,MXN,CHF';//EOS

var adaUrl = 'https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=USD,JPY,EUR,GBP,RUB,TRY,ILS,CAD,AUD,BRL,INR,IDR,CNY,KRW,VND,ARS,MXN,CHF';//Cardano

/*Cryptocompare API LINKS */

$http.get(dashUrl).then(function(response){
	$scope.dashValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(xlmUrl).then(function(response){
	$scope.xlmValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(eosUrl).then(function(response){
	$scope.eosValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(xmrUrl).then(function(response){
	$scope.xmrValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(adaUrl).then(function(response){
	$scope.adaValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(etcUrl).then(function(response){
	$scope.etcValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(usdtUrl).then(function(response){
	$scope.usdtValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(bchUrl).then(function(response){
	$scope.bchValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(btcpUrl).then(function(response){
	$scope.btcpValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(xrpUrl).then(function(response){
	$scope.xrpValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(ltcUrl).then(function(response){
	$scope.ltcValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(ethUrl).then(function(response){
	$scope.ethValue = response.data;
    },function(error){
		console.log(error);
});

$http.get(btcUrl).then(function(response){
	$scope.btcValue = response.data;
    },function(error){
		console.log(error);
});


var bg = chrome.extension.getBackgroundPage();
				 
					 if(bg.coin=="ETH"){
						 $scope.s = {switch:true};
					 }
					 
				  bg.updatePrices(function(){
					 $scope.$apply(function(){
						 $scope.prices = bg.prices;
					 })  
				  });	 
				 $scope.prices = bg.prices;

$scope.save = function(){
	var s = $scope.s.switch;
	var coin;
	 if(s){
		 coin = "ETH";
	 } else {
		 coin = "BTC";
	 }
	 
	 bg.coin = coin;
	 bg.updateBadge();
}


$scope.crypto = {
	Bitcoin : function(){
		switch ($scope.selectedCurrency) {
			case 'US Dollar' : 
			return $scope.coin * $scope.btcValue.USD;
			break;
			case 'UK Pound' : 
			return $scope.coin * $scope.btcValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.btcValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.btcValue.EUR;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.btcValue.RUB;
			break;
			case 'Turkish Lira' : 
			return $scope.coin * $scope.btcValue.TRY;
			break;
			case 'Israeli Shekel' : 
			return $scope.coin * $scope.btcValue.ILS;
			break;
			case 'Canadian Dollar' : 
			return $scope.coin * $scope.btcValue.CAD;
			break;
			case 'Australian Dollar' : 
			return $scope.coin * $scope.btcValue.AUD;
			break;
			case 'Brazilian Real' : 
			return $scope.coin * $scope.btcValue.BRL;
			break;
			case 'Indian Rupee' : 
			return $scope.coin * $scope.btcValue.INR;
			break;
			case 'Indonesian Rupiah' : 
			return $scope.coin * $scope.btcValue.IDR;
			break;
			case 'Yuan Renminbi' : 
			return $scope.coin * $scope.btcValue.CNY;
			break;
			case 'Won' : 
			return $scope.coin * $scope.btcValue.KRW;
			break;
			case 'Vietnamese Dong' : 
			return $scope.coin * $scope.btcValue.VND;
			break;
			case 'Argentine Peso' : 
			return $scope.coin * $scope.btcValue.ARS;
			break;
			case 'Mexican Peso' : 
			return $scope.coin * $scope.btcValue.MXN;
			break;
			case 'Swiss Franc' : 
			return $scope.coin * $scope.btcValue.CHF;
			break;
		}
	},
	
	Ethereum : function(){
		switch ($scope.selectedCurrency) {
			case 'US Dollar' : 
			return $scope.coin * $scope.ethValue.USD;
			break;
			case 'UK Pound' : 
			return $scope.coin * $scope.ethValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.ethValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.ethValue.EUR;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.ethValue.RUB;
			break;
			case 'Turkish Lira' : 
			return $scope.coin * $scope.ethValue.TRY;
			break;
			case 'Israeli Shekel' : 
			return $scope.coin * $scope.ethValue.ILS;
			break;
			case 'Canadian Dollar' : 
			return $scope.coin * $scope.ethValue.CAD;
			break;
			case 'Australian Dollar' : 
			return $scope.coin * $scope.ethValue.AUD;
			break;
			case 'Brazilian Real' : 
			return $scope.coin * $scope.ethValue.BRL;
			break;
			case 'Indian Rupee' : 
			return $scope.coin * $scope.ethValue.INR;
			break;
			case 'Indonesian Rupiah' : 
			return $scope.coin * $scope.ethValue.IDR;
			break;
			case 'Yuan Renminbi' : 
			return $scope.coin * $scope.ethValue.CNY;
			break;
			case 'Won' : 
			return $scope.coin * $scope.ethValue.KRW;
			break;
			case 'Vietnamese Dong' : 
			return $scope.coin * $scope.ethValue.VND;
			break;
			case 'Argentine Peso' : 
			return $scope.coin * $scope.ethValue.ARS;
			break;
			case 'Mexican Peso' : 
			return $scope.coin * $scope.ethValue.MXN;
			break;
			case 'Swiss Franc' : 
			return $scope.coin * $scope.ethValue.CHF;
			break;
		}
	},

	Dash : function(){
		switch ($scope.selectedCurrency) {
			case 'US Dollar' : 
			return $scope.coin * $scope.dashValue.USD;
			break;
			case 'UK Pound' : 
			return $scope.coin * $scope.dashValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.dashValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.dashValue.EUR;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.dashValue.RUB;
			break;
			case 'Turkish Lira' : 
			return $scope.coin * $scope.dashValue.TRY;
			break;
			case 'Israeli Shekel' : 
			return $scope.coin * $scope.dashValue.ILS;
			break;
			case 'Canadian Dollar' : 
			return $scope.coin * $scope.dashValue.CAD;
			break;
			case 'Australian Dollar' : 
			return $scope.coin * $scope.dashValue.AUD;
			break;
			case 'Brazilian Real' : 
			return $scope.coin * $scope.dashValue.BRL;
			break;
			case 'Indian Rupee' : 
			return $scope.coin * $scope.dashValue.INR;
			break;
			case 'Indonesian Rupiah' : 
			return $scope.coin * $scope.dashValue.IDR;
			break;
			case 'Yuan Renminbi' : 
			return $scope.coin * $scope.dashValue.CNY;
			break;
			case 'Won' : 
			return $scope.coin * $scope.dashValue.KRW;
			break;
			case 'Vietnamese Dong' : 
			return $scope.coin * $scope.dashValue.VND;
			break;
			case 'Argentine Peso' : 
			return $scope.coin * $scope.dashValue.ARS;
			break;
			case 'Mexican Peso' : 
			return $scope.coin * $scope.dashValue.MXN;
			break;
			case 'Swiss Franc' : 
			return $scope.coin * $scope.dashValue.CHF;
			break;
		}
	},

	Stellar : function(){
		switch ($scope.selectedCurrency) {
			case 'US Dollar' : 
			return $scope.coin * $scope.xlmValue.USD;
			break;
			case 'UK Pound' : 
			return $scope.coin * $scope.xlmValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.xlmValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.xlmValue.EUR;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.xlmValue.RUB;
			break;
			case 'Turkish Lira' : 
			return $scope.coin * $scope.xlmValue.TRY;
			break;
			case 'Israeli Shekel' : 
			return $scope.coin * $scope.xlmValue.ILS;
			break;
			case 'Canadian Dollar' : 
			return $scope.coin * $scope.xlmValue.CAD;
			break;
			case 'Australian Dollar' : 
			return $scope.coin * $scope.xlmValue.AUD;
			break;
			case 'Brazilian Real' : 
			return $scope.coin * $scope.xlmValue.BRL;
			break;
			case 'Indian Rupee' : 
			return $scope.coin * $scope.xlmValue.INR;
			break;
			case 'Indonesian Rupiah' : 
			return $scope.coin * $scope.xlmValue.IDR;
			break;
			case 'Yuan Renminbi' : 
			return $scope.coin * $scope.xlmValue.CNY;
			break;
			case 'Won' : 
			return $scope.coin * $scope.xlmValue.KRW;
			break;
			case 'Vietnamese Dong' : 
			return $scope.coin * $scope.xlmValue.VND;
			break;
			case 'Argentine Peso' : 
			return $scope.coin * $scope.xlmValue.ARS;
			break;
			case 'Mexican Peso' : 
			return $scope.coin * $scope.xlmValue.MXN;
			break;
			case 'Swiss Franc' : 
			return $scope.coin * $scope.xlmValue.CHF;
			break;
		}
	},

	EOS : function(){
		switch ($scope.selectedCurrency) {
			case 'US Dollar' : 
			return $scope.coin * $scope.eosValue.USD;
			break;
			case 'UK Pound' : 
			return $scope.coin * $scope.eosValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.eosValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.eosValue.EUR;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.eosValue.RUB;
			break;
			case 'Turkish Lira' : 
			return $scope.coin * $scope.eosValue.TRY;
			break;
			case 'Israeli Shekel' : 
			return $scope.coin * $scope.eosValue.ILS;
			break;
			case 'Canadian Dollar' : 
			return $scope.coin * $scope.eosValue.CAD;
			break;
			case 'Australian Dollar' : 
			return $scope.coin * $scope.eosValue.AUD;
			break;
			case 'Brazilian Real' : 
			return $scope.coin * $scope.eosValue.BRL;
			break;
			case 'Indian Rupee' : 
			return $scope.coin * $scope.eosValue.INR;
			break;
			case 'Indonesian Rupiah' : 
			return $scope.coin * $scope.eosValue.IDR;
			break;
			case 'Yuan Renminbi' : 
			return $scope.coin * $scope.eosValue.CNY;
			break;
			case 'Won' : 
			return $scope.coin * $scope.eosValue.KRW;
			break;
			case 'Vietnamese Dong' : 
			return $scope.coin * $scope.eosValue.VND;
			break;
			case 'Argentine Peso' : 
			return $scope.coin * $scope.eosValue.ARS;
			break;
			case 'Mexican Peso' : 
			return $scope.coin * $scope.eosValue.MXN;
			break;
			case 'Swiss Franc' : 
			return $scope.coin * $scope.eosValue.CHF;
			break;
		}
	},

	Monero : function(){
		switch ($scope.selectedCurrency) {
			case 'US Dollar' : 
			return $scope.coin * $scope.xmrValue.USD;
			break;
			case 'UK Pound' : 
			return $scope.coin * $scope.xmrValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.xmrValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.xmrValue.EUR;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.xmrValue.RUB;
			break;
			case 'Turkish Lira' : 
			return $scope.coin * $scope.xmrValue.TRY;
			break;
			case 'Israeli Shekel' : 
			return $scope.coin * $scope.xmrValue.ILS;
			break;
			case 'Canadian Dollar' : 
			return $scope.coin * $scope.xmrValue.CAD;
			break;
			case 'Australian Dollar' : 
			return $scope.coin * $scope.xmrValue.AUD;
			break;
			case 'Brazilian Real' : 
			return $scope.coin * $scope.xmrValue.BRL;
			break;
			case 'Indian Rupee' : 
			return $scope.coin * $scope.xmrValue.INR;
			break;
			case 'Indonesian Rupiah' : 
			return $scope.coin * $scope.xmrValue.IDR;
			break;
			case 'Yuan Renminbi' : 
			return $scope.coin * $scope.xmrValue.CNY;
			break;
			case 'Won' : 
			return $scope.coin * $scope.xmrValue.KRW;
			break;
			case 'Vietnamese Dong' : 
			return $scope.coin * $scope.xmrValue.VND;
			break;
			case 'Argentine Peso' : 
			return $scope.coin * $scope.xmrValue.ARS;
			break;
			case 'Mexican Peso' : 
			return $scope.coin * $scope.xmrValue.MXN;
			break;
			case 'Swiss Franc' : 
			return $scope.coin * $scope.xmrValue.CHF;
			break;
		}
	},


	Tether : function(){
		switch ($scope.selectedCurrency) {
			case 'US Dollar' : 
			return $scope.coin * $scope.usdtValue.USD;
			break;
			case 'UK Pound' : 
			return $scope.coin * $scope.usdtValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.usdtValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.usdtValue.EUR;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.usdtValue.RUB;
			break;
			case 'Turkish Lira' : 
			return $scope.coin * $scope.usdtValue.TRY;
			break;
			case 'Israeli Shekel' : 
			return $scope.coin * $scope.usdtValue.ILS;
			break;
			case 'Canadian Dollar' : 
			return $scope.coin * $scope.usdtValue.CAD;
			break;
			case 'Australian Dollar' : 
			return $scope.coin * $scope.usdtValue.AUD;
			break;
			case 'Brazilian Real' : 
			return $scope.coin * $scope.usdtValue.BRL;
			break;
			case 'Indian Rupee' : 
			return $scope.coin * $scope.usdtValue.INR;
			break;
			case 'Indonesian Rupiah' : 
			return $scope.coin * $scope.usdtValue.IDR;
			break;
			case 'Yuan Renminbi' : 
			return $scope.coin * $scope.usdtValue.CNY;
			break;
			case 'Won' : 
			return $scope.coin * $scope.usdtValue.KRW;
			break;
			case 'Vietnamese Dong' : 
			return $scope.coin * $scope.usdtValue.VND;
			break;
			case 'Argentine Peso' : 
			return $scope.coin * $scope.usdtValue.ARS;
			break;
			case 'Mexican Peso' : 
			return $scope.coin * $scope.usdtValue.MXN;
			break;
			case 'Swiss Franc' : 
			return $scope.coin * $scope.usdtValue.CHF;
			break;
		}
	},

	Ripple : function(){
		switch ($scope.selectedCurrency) {
			case 'US Dollar' : 
			return $scope.coin * $scope.xrpValue.USD;
			break;
			case 'UK Pound' : 
			return $scope.coin * $scope.xrpValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.xrpValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.xrpValue.EUR;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.xrpValue.RUB;
			break;
			case 'Turkish Lira' : 
			return $scope.coin * $scope.xrpValue.TRY;
			break;
			case 'Israeli Shekel' : 
			return $scope.coin * $scope.xrpValue.ILS;
			break;
			case 'Canadian Dollar' : 
			return $scope.coin * $scope.xrpValue.CAD;
			break;
			case 'Australian Dollar' : 
			return $scope.coin * $scope.xrpValue.AUD;
			break;
			case 'Brazilian Real' : 
			return $scope.coin * $scope.xrpValue.BRL;
			break;
			case 'Indian Rupee' : 
			return $scope.coin * $scope.xrpValue.INR;
			break;
			case 'Indonesian Rupiah' : 
			return $scope.coin * $scope.xrpValue.IDR;
			break;
			case 'Yuan Renminbi' : 
			return $scope.coin * $scope.xrpValue.CNY;
			break;
			case 'Won' : 
			return $scope.coin * $scope.xrpValue.KRW;
			break;
			case 'Vietnamese Dong' : 
			return $scope.coin * $scope.xrpValue.VND;
			break;
			case 'Argentine Peso' : 
			return $scope.coin * $scope.xrpValue.ARS;
			break;
			case 'Mexican Peso' : 
			return $scope.coin * $scope.xrpValue.MXN;
			break;
			case 'Swiss Franc' : 
			return $scope.coin * $scope.xrpValue.CHF;
			break;
		}
	},

	EthereumClassic : function(){
		switch ($scope.selectedCurrency) {
			case 'US Dollar' : 
			return $scope.coin * $scope.etcValue.USD;
			break;
			case 'UK Pound' : 
			return $scope.coin * $scope.etcValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.etcValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.etcValue.EUR;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.etcValue.RUB;
			break;
			case 'Turkish Lira' : 
			return $scope.coin * $scope.etcValue.TRY;
			break;
			case 'Israeli Shekel' : 
			return $scope.coin * $scope.etcValue.ILS;
			break;
			case 'Canadian Dollar' : 
			return $scope.coin * $scope.etcValue.CAD;
			break;
			case 'Australian Dollar' : 
			return $scope.coin * $scope.etcValue.AUD;
			break;
			case 'Brazilian Real' : 
			return $scope.coin * $scope.etcValue.BRL;
			break;
			case 'Indian Rupee' : 
			return $scope.coin * $scope.etcValue.INR;
			break;
			case 'Indonesian Rupiah' : 
			return $scope.coin * $scope.etcValue.IDR;
			break;
			case 'Yuan Renminbi' : 
			return $scope.coin * $scope.etcValue.CNY;
			break;
			case 'Won' : 
			return $scope.coin * $scope.etcValue.KRW;
			break;
			case 'Vietnamese Dong' : 
			return $scope.coin * $scope.etcValue.VND;
			break;
			case 'Argentine Peso' : 
			return $scope.coin * $scope.etcValue.ARS;
			break;
			case 'Mexican Peso' : 
			return $scope.coin * $scope.etcValue.MXN;
			break;
			case 'Swiss Franc' : 
			return $scope.coin * $scope.etcValue.CHF;
			break;
		}
	},

	Cardano : function(){
		switch ($scope.selectedCurrency) {
			case 'US Dollar' : 
			return $scope.coin * $scope.adaValue.USD;
			break;
			case 'UK Pound' : 
			return $scope.coin * $scope.adaValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.adaValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.adaValue.EUR;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.adaValue.RUB;
			break;
			case 'Turkish Lira' : 
			return $scope.coin * $scope.adaValue.TRY;
			break;
			case 'Israeli Shekel' : 
			return $scope.coin * $scope.adaValue.ILS;
			break;
			case 'Canadian Dollar' : 
			return $scope.coin * $scope.adaValue.CAD;
			break;
			case 'Australian Dollar' : 
			return $scope.coin * $scope.adaValue.AUD;
			break;
			case 'Brazilian Real' : 
			return $scope.coin * $scope.adaValue.BRL;
			break;
			case 'Indian Rupee' : 
			return $scope.coin * $scope.adaValue.INR;
			break;
			case 'Indonesian Rupiah' : 
			return $scope.coin * $scope.adaValue.IDR;
			break;
			case 'Yuan Renminbi' : 
			return $scope.coin * $scope.adaValue.CNY;
			break;
			case 'Won' : 
			return $scope.coin * $scope.adaValue.KRW;
			break;
			case 'Vietnamese Dong' : 
			return $scope.coin * $scope.adaValue.VND;
			break;
			case 'Argentine Peso' : 
			return $scope.coin * $scope.adaValue.ARS;
			break;
			case 'Mexican Peso' : 
			return $scope.coin * $scope.adaValue.MXN;
			break;
			case 'Swiss Franc' : 
			return $scope.coin * $scope.adaValue.CHF;
			break;
		}
	},

	BitcoinPrivate : function(){
		switch ($scope.selectedCurrency) {
			case 'US Dollar' : 
			return $scope.coin * $scope.btcpValue.USD;
			break;
			case 'UK Pound' : 
			return $scope.coin * $scope.btcpValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.btcpValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.btcpValue.EUR;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.btcpValue.RUB;
			break;
			case 'Turkish Lira' : 
			return $scope.coin * $scope.btcpValue.TRY;
			break;
			case 'Israeli Shekel' : 
			return $scope.coin * $scope.btcpValue.ILS;
			break;
			case 'Canadian Dollar' : 
			return $scope.coin * $scope.btcpValue.CAD;
			break;
			case 'Australian Dollar' : 
			return $scope.coin * $scope.btcpValue.AUD;
			break;
			case 'Brazilian Real' : 
			return $scope.coin * $scope.btcpValue.BRL;
			break;
			case 'Indian Rupee' : 
			return $scope.coin * $scope.btcpValue.INR;
			break;
			case 'Indonesian Rupiah' : 
			return $scope.coin * $scope.btcpValue.IDR;
			break;
			case 'Yuan Renminbi' : 
			return $scope.coin * $scope.btcpValue.CNY;
			break;
			case 'Won' : 
			return $scope.coin * $scope.btcpValue.KRW;
			break;
			case 'Vietnamese Dong' : 
			return $scope.coin * $scope.btcpValue.VND;
			break;
			case 'Argentine Peso' : 
			return $scope.coin * $scope.btcpValue.ARS;
			break;
			case 'Mexican Peso' : 
			return $scope.coin * $scope.btcpValue.MXN;
			break;
			case 'Swiss Franc' : 
			return $scope.coin * $scope.btcpValue.CHF;
			break;
		}
	},

	BitcoinCash : function(){
		switch ($scope.selectedCurrency) {
			case 'US Dollar' : 
			return $scope.coin * $scope.bchValue.USD;
			break;
			case 'UK Pound' : 
			return $scope.coin * $scope.bchValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.bchValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.bchValue.EUR;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.bchValue.RUB;
			break;
			case 'Turkish Lira' : 
			return $scope.coin * $scope.bchValue.TRY;
			break;
			case 'Israeli Shekel' : 
			return $scope.coin * $scope.bchValue.ILS;
			break;
			case 'Canadian Dollar' : 
			return $scope.coin * $scope.bchValue.CAD;
			break;
			case 'Australian Dollar' : 
			return $scope.coin * $scope.bchValue.AUD;
			break;
			case 'Brazilian Real' : 
			return $scope.coin * $scope.bchValue.BRL;
			break;
			case 'Indian Rupee' : 
			return $scope.coin * $scope.bchValue.INR;
			break;
			case 'Indonesian Rupiah' : 
			return $scope.coin * $scope.bchValue.IDR;
			break;
			case 'Yuan Renminbi' : 
			return $scope.coin * $scope.bchValue.CNY;
			break;
			case 'Won' : 
			return $scope.coin * $scope.bchValue.KRW;
			break;
			case 'Vietnamese Dong' : 
			return $scope.coin * $scope.bchValue.VND;
			break;
			case 'Argentine Peso' : 
			return $scope.coin * $scope.bchValue.ARS;
			break;
			case 'Mexican Peso' : 
			return $scope.coin * $scope.bchValue.MXN;
			break;
			case 'Swiss Franc' : 
			return $scope.coin * $scope.bchValue.CHF;
			break;
		}
	},

	Litecoin : function(){
		switch ($scope.selectedCurrency) {
			case 'US Dollar' : 
			return $scope.coin * $scope.ltcValue.USD;
			break;
			case 'UK Pound' : 
			return $scope.coin * $scope.ltcValue.GBP;
			break;
			case 'Japan Yen' : 
			return $scope.coin * $scope.ltcValue.JPY;
			break;
			case 'Euro' : 
			return $scope.coin * $scope.ltcValue.EUR;
			break;
			case 'Rusian Ruble' : 
			return $scope.coin * $scope.ltcValue.RUB;
			break;
			case 'Turkish Lira' : 
			return $scope.coin * $scope.ltcValue.TRY;
			break;
			case 'Israeli Shekel' : 
			return $scope.coin * $scope.ltcValue.ILS;
			break;
			case 'Canadian Dollar' : 
			return $scope.coin * $scope.ltcValue.CAD;
			break;
			case 'Australian Dollar' : 
			return $scope.coin * $scope.ltcValue.AUD;
			break;
			case 'Brazilian Real' : 
			return $scope.coin * $scope.ltcValue.BRL;
			break;
			case 'Indian Rupee' : 
			return $scope.coin * $scope.ltcValue.INR;
			break;
			case 'Indonesian Rupiah' : 
			return $scope.coin * $scope.ltcValue.IDR;
			break;
			case 'Yuan Renminbi' : 
			return $scope.coin * $scope.ltcValue.CNY;
			break;
			case 'Won' : 
			return $scope.coin * $scope.ltcValue.KRW;
			break;
			case 'Vietnamese Dong' : 
			return $scope.coin * $scope.ltcValue.VND;
			break;
			case 'Argentine Peso' : 
			return $scope.coin * $scope.ltcValue.ARS;
			break;
			case 'Mexican Peso' : 
			return $scope.coin * $scope.ltcValue.MXN;
			break;
			case 'Swiss Franc' : 
			return $scope.coin * $scope.ltcValue.CHF;
			break;
		}
	}
};

});