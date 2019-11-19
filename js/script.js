$(".dropdown-menu").on( "click", "a", function(e) {
	e.preventDefault();

    var text = $(this).html();
    var htmlText = text + " <span class='caret'></span>";
	$(this).closest(".dropdown").find(".dropdown-toggle").html(htmlText);
	$(this).closest(".dropdown").find(".dropdown-toggle").attr("data-value", $(this).attr("data-value"));
});

$("#search").on( "click", function() {
	var block = $("#block").val().trim();
	var blockchain = $("#blockchain").attr("data-value");
	var redirect = "";

	switch(blockchain) {
		case "bitcoin":
			var regex = new RegExp("^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$");

			if (regex.test(block)) {
				redirect = "https://www.blockchain.com/btc/address/";
			} else {
				redirect = "https://www.blockchain.com/btc/tx/";
			}
			break;
		case "ethereum":
			redirect = "https://etherscan.io/search?q=";
			break;
		case "litecoin":
			redirect = "https://blockchair.com/search?q=";
			break;
		case "ripple":
			redirect = "https://blockchair.com/search?q=";
			break;
		case "dash":
			redirect = "https://blockchair.com/search?q=";
			break;
		case "tether":
			redirect = "https://www.omniexplorer.info/search/";
			break;
	}

	redirect += block;

	chrome.tabs.create({url: redirect});
});
