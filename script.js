const apiKey = 'YOUR_API_KEY_HERE';
const searchEngineId = 'YOUR_SEARCH_ENGINE_ID_HERE';
const query = 'motivational quotes';
const imgType = 'photo';
const imgSize = 'large';
const imgColorType = 'color';
const intervalTime = 10000;

const quoteElement = document.querySelector('.quote');
const backgroundElement = document.querySelector('.background-image');

function getSearchResults() {
  return fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${query}&imgType=${imgType}&imgSize=${imgSize}&imgColorType=${imgColorType}`)
    .then(response => response.json
