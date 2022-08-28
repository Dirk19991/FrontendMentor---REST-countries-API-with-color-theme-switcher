const BASE_URL = 'https://restcountries.com/v2/';

const ALL_COUTRIES = `${BASE_URL}all`;

const searchByCountry = (name) => `${BASE_URL}/name/${name}`;

const filterByCode = (...codes) => `${BASE_URL}alpha?codes=${codes.join(',')}`;

console.log(filterByCode(['pre', 'or']));
