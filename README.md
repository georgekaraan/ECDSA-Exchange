# exchange-secp256k1
Uses [noble-secp256k1](https://github.com/paulmillr/noble-secp256k1)


# Flow of Application

1. Install Dependencies

   Run `npm install` 

2. Start server

   Run `node server/index.js` in order to start server. 

   You will receive 3 public-private key account combinations, with different balances.

3. Start parcel application

   Run `npx parcel client/index.html` in order to start application at default localhost:1234

4. Use `offlineSignature.js` to produce a digital signature offline.

   Pass in the correct values, the ones from your current server!

   Run `node offlineSignature` in order to get your `signature` 

5. In the `Send Funds to Wallet` section, provide signature + other details needed (recipient, amount)

6. Hit `Transfer Amount`

7. You can check if the balances have been modified by plugging in the public key of the sender or receiver in the 'Check Balances' section
