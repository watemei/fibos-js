/*
  执行 fibos getKeys.js
*/

var FIBOS = require("fibos.js");

var prikey = FIBOS.modules.ecc.randomKeySync(); //私钥
var pubkey = FIBOS.modules.ecc.privateToPublic(prikey); //公钥

console.log("========一定要保存下来=====================");
console.log("prikey:" + prikey);
console.log("pubkey:" + pubkey);
console.log("========一定要保存下来=====================");