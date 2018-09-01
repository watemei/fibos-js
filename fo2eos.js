var FIBOS = require('./initClient.js')
var CONFIG = require('./config.js')

var fibos_client = FIBOS({
    chainId: CONFIG.mainChain.chainId,
    keyProvider: CONFIG.mainChain.priKey,
    httpEndpoint: CONFIG.mainChain.httpEndpoint,
    verbose: false,
    logger: {
        log: null,
        error: null
    }
});


let ctx = fibos_client.contractSync("eosio.token");
var result = ctx.exchangeSync(CONFIG.foaccount, '10.0000 FO@eosio', '0.0000 EOS@eosio', 'exchange FO to EOS', {
    authorization: CONFIG.foaccount
});
console.log(result);