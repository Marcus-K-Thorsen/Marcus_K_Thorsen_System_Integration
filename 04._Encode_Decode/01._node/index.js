const message = "hello world";

console.log("..................................................");

const base64Encoded = btoa(message);

const base64Decoded = atob(base64Encoded);

console.log("Base64 encoded message:", base64Encoded);
console.log("Bas64 decoded message:", base64Decoded);

console.log("..................................................");

// Encode
const hexEncoded = Buffer.from(message, 'utf8').toString('hex');
// Decode
const hexDecoded = Buffer.from(hexEncoded, 'hex').toString('utf8');


console.log("Hex encoded message:", hexEncoded);
console.log("Hex decoded message:", hexDecoded);

console.log("..................................................");

// Encode
const uriEncoded = encodeURIComponent(message);
// Decode
const uriDecoded = decodeURIComponent(uriEncoded);

console.log("URI encoded message:", uriEncoded);
console.log("URI decoded message:", uriDecoded);

console.log("..................................................");
