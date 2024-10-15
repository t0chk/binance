const { CoinMClient } = require('binance');

  // ENDPOINT: dapi/v1/depth
  // METHOD: GET
  // PUBLIC: YES
  // Link to function: https://github.com/tiagosiebler/binance/blob/master/src/coinm-client.ts#L133

const client = new CoinMClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getOrderBook(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
