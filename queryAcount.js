var FIBOS = require('./initClient.js')
var CONFIG = require('./config.js');
// new FIBOS client getKeys生成纪录下来的
var fibos = FIBOS(CONFIG.mainChain);


var rs = fibos.getTableRowsSync(true, "eosio.token", CONFIG.foaccount, "accounts");

console.log('---eos fo --',rs);

var user = fibos.getAccountSync(CONFIG.foaccount);
console.warn('---- user ----', user);