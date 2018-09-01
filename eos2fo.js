var FIBOS = require('./initClient.js')
var CONFIG = require('./config.js')

var eos_client = FIBOS({
    chainId: CONFIG.mainChain.chainId,
    keyProvider: CONFIG.mainChain.priKey,
    httpEndpoint: CONFIG.mainChain.httpEndpoint,
    verbose: false,
    logger: {
        log: null,
        error: null
    }
});

let eosaccount = CONFIG.eosaccount; // 你的 EOS 账户名
let value = "1.0000" + " EOS"; //兑换 EOS 数量
let ctx = eos_client.contractSync("eosio.token");
let memo = CONFIG.foaccount; //填入你的fibso 账号
let result = ctx.transferSync(eosaccount, "fiboscouncil", value, memo);

console.log(result);
