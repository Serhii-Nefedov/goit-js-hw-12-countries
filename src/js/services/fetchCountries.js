

const mainUrl = 'https://restcountries.eu/rest/v2/name/';

export default {
  fetchArticles(query) {
    const requestParams = `${query}`;
    return fetch(mainUrl + requestParams).then(res => res.json());
  },
};
