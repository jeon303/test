const API_ENDPOINT = "https://api.coingecko.com/api/v3";

// Function to get the top 500 cryptocurrencies from the API
async function getTop500Cryptocurrencies() {
  const response = await fetch(`${API_ENDPOINT}/coins/markets?vs_currency=usd&per_page=500`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

// Function to update the price and percentage change for a specific cryptocurrency
function updateCryptocurrencyPrice(cryptocurrency, row) {
  // Get the price and percentage change from the API
  const price = cryptocurrency.current_price;
  const hourChange = cryptocurrency.price_change_percentage_1h_in_currency;
  const dayChange = cryptocurrency.price_change_percentage_24h_in_currency;
  const weekChange = cryptocurrency.price_change_percentage_7d_in_currency;

  // Update the price and percentage change in the table row
  $(row).find(".price").text(`$${price.toLocaleString()}`);
  $(row).find(".hour-change").text(`${hourChange.toFixed(2)}%`);
  $(row).find(".day-change").text(`${dayChange.toFixed(2)}%`);
  $(row).find(".week-change").text(`${weekChange.toFixed(2)}%`);

  // Update the color of the percentage change based on its value
  if (hourChange < 0) {
    $(row).find(".hour-change").addClass("negative");
  } else {
    $(row).find(".hour-change").removeClass("negative");
  }
  if (dayChange < 0) {
    $(row).find(".day-change").addClass("negative");
  } else {
    $(row).find(".day-change").removeClass("negative");
  }
  if (weekChange < 0) {
    $(row).find(".week-change").addClass("negative");
  } else {
    $(row).find(".week-change").removeClass("negative");
  }
}

// Function to update the prices and percentage changes for all cryptocurrencies
async function updateCryptocurrencyPrices() {
  const cryptocurrencies = await getTop500
