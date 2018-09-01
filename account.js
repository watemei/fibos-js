
var FIBOS = require("fibos.js");
var CONFIG = require('./config.js')


var http = require('http');
var httpClient = new http.Client();
var httpServerHost = "http://tunnel.fibos.io/1.0/app/token/create";
var account = CONFIG.foaccount;  //你的 FIBOS 账户名
var pubkey = CONFIG.pubkey; //你的 FIBOS 公钥 通过getKeys生成
var rep = httpClient.post(httpServerHost, {
    json: {
        account: account,
        pubkey: pubkey
    }
}).json()

console.log("========success即可===========");
console.log(rep);