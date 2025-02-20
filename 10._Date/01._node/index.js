console.log("===== new Date() =====");
console.log(new Date()); // UTC Standard: ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ)

console.log("===== Date() =====");
console.log(Date()); // Local Date and Time format (Day Month Date HH:mm:ss TZD YYYY)

console.log("===== Date.now() =====");
console.log(Date.now()); // Unix Epoch Time (milliseconds since 1 January 1970 00:00:00 UTC)

const date = new Date();

console.log("===== new Intl.DateTimeFormat('da-dk').format(date) =====");
const danishDate = new Intl.DateTimeFormat('da-dk').format(date);
console.log(danishDate); // 20.2.2025

console.log("===== new Intl.DateTimeFormat('en-us').format(date) =====");
const americanDate = new Intl.DateTimeFormat('en-us').format(date);
console.log(americanDate); // 2/20/2025