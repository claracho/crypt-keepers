const request = require('request');
const rp = require('request-promise');

const getTimeSeriesByRange = (coin = 'BTC', dateStart, dateEnd, granularity, currency = 'USD') => {
  const options = {
    url: `https://api.gdax.com/products/${coin}-${currency}/candles`,
    qs: {
      start: new Date(Number(dateStart)),
      end: new Date(Number(dateEnd)),
      granularity: Number(granularity),
    },
    headers: {
      'User-Agent': 'Cryptonium',
    },
    json: true,
  };

  return rp(options)
    .then(series => series)
    .catch(err => console.error(err));
};

const getTickerData = (coin = 'BTC', currency = 'USD') => {
  const options = {
    url: `https://api.gdax.com/products/${coin}-${currency}/ticker`,
    headers: {
      'User-Agent': 'Cryptonium',
    },
    json: true,
  };

  return rp(options)
    .then(data => data)
    .catch(err => console.error(err));
};

module.exports.getTimeSeriesByRange = getTimeSeriesByRange;
module.exports.getTickerData = getTickerData;
