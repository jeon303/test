$(document).ready(function() {

	var apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

	function getBitcoinPrice() {
		$.getJSON(apiUrl, function(data) {
			var bitcoinPrice = data["bitcoin"]["usd"].toLocaleString('en-US', {style: 'currency', currency: 'USD'});
			$("#price").text(bitcoinPrice);
		});
	}

	getBitcoinPrice();

});
