/**
 * This script is used offline in order to generate a digital signature!
 */

const secp = require("@noble/secp256k1");
const { keccak_256 } = require('@noble/hashes/sha3');
const { bytesToHex } = require('@noble/hashes/utils');

(async () => {
  // copy-paste a private key generated when running server/index.js
  const privateKey = "030bcf6942e97580705f0ff50e3be011c8ecbb526f340a943b3f9705596b0d0d";

  const message = JSON.stringify({
    to: "0x4a9bb8425e864a30f2b63aa15a1e63fbb2ac9c4c", // public key of recipient address
    amount: parseInt(44) // amount to be sent
  });

  // hash the message
  const messageHash = bytesToHex(keccak_256(message));

  // use secp.sign() to produce digital signature and recovery bit (0 or 1)
  const signatureArray = await secp.sign(messageHash, privateKey, {
    recovered: true
  });

  var signature = signatureArray[0]; // the signature
  const recoveryBit = signatureArray[1]; // 0 or 1

  // print signature in hex and recovery bit
  signature = Buffer.from(signature).toString('hex');
  console.log("Signature: " + signature);
  // console.log("Recovery Bit: " + recoveryBit);
})();