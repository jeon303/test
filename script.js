function fetchData() {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=false")
        .then(response => response.json())
        .then(data => {
            displayData(data);
            setTimeout(fetchData, 15000);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            setTimeout(fetchData, 15000);
        });
}

function displayData(data) {
    const tableBody = document.getElementById("crypto-table-body");
    tableBody.innerHTML = "";

    data.forEach((crypto, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${crypto.name}<img src="${crypto.image}" alt="${crypto.name}" width="20" height="20"></td>
            <td>${crypto.symbol.toUpperCase()}</td>
            <td>$${crypto.current_price.toFixed(2)}</td>
            <td>${crypto.price_change_percentage_1h_in_currency.toFixed(2)}%</td>
            <td>${crypto.price_change_percentage_24h_in_currency.toFixed(2)}%</td>
            <td>${crypto.price_change_percentage_7d_in_currency.toFixed(2)}%</td>
            <td>$${crypto.market_cap.toLocaleString()}</td>
            <td>$${crypto.fully_diluted_valuation.toLocaleString()}</td>
            <td>${crypto.circulating_supply.toLocaleString()}</td>
       

