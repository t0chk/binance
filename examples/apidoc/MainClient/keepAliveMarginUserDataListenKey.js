const { MainClient } = require('binance');

  // ENDPOINT: sapi/v1/userDataStream?listenKey=${listenKey}
  // METHOD: PUT
  // PUBLIC: YES
  // Link to function: https://github.com/tiagosiebler/binance/blob/master/src/main-client.ts#L3802

const client = new MainClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.keepAliveMarginUserDataListenKey(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
