const { MainClient } = require('binance');

  // ENDPOINT: api/v3/orderList/oto
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/binance/blob/master/src/main-client.ts#L747

const client = new MainClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.submitNewOrderListOTO(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
