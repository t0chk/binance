const { USDMClient } = require('binance');

  // ENDPOINT: fapi/v1/positionMargin
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/binance/blob/master/src/usdm-client.ts#L442

const client = new USDMClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.setIsolatedPositionMargin(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
