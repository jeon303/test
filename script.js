$(document).ready(function() {

	var apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

	function getCryptocurrencies() {
		$.getJSON(apiUrl, function(data) {
			var cryptocurrencies = data;

			$.each(cryptocurrencies, function(index, cryptocurrency) {
				var rank = cryptocurrency.market_cap_rank;
				var name = cryptocurrency.name;
				var symbol = cryptocurrency.symbol.toUpperCase();
				var price = cryptocurrency.current_price.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
				var marketCap = cryptocurrency.market_cap.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
				var change24h = cryptocurrency.price_change_percentage_24h.toFixed(2);
				var changeClass = change24h >= 0 ? "green" : "red";
				var logo = "<img src='" + cryptocurrency.image + "' width='20' height='20'>";

				var cryptocurrencyRow = "<tr>";
				cryptocurrencyRow += "<td>" + rank + "</td>";
				cryptocurrencyRow += "<td>" + name + "</td>";
				cryptocurrencyRow += "<td>" + symbol + "</td>";
				cryptocurrencyRow += "<td>" + price + "</td>";
				cryptocurrencyRow += "<td>" + marketCap + "</td>";
				cryptocurrencyRow += "<td class=\"" + changeClass + "\">" + change24h + "</td>";
				cryptocurrencyRow += "<td>" + logo + "</td>";
				cryptocurrencyRow += "</tr>";

				$("#cryptocurrencies-table").append(cryptocurrencyRow);
			});
		});
	}

	getCryptocurrencies();

});
