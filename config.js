var config = {
	mainChain:{
		chainId: "6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a",
	    priKey: "FIBOS 私钥",// 生成方法 fibos getKeys.js
	    httpEndpoint: "http://ca-rpc.fibos.io:8870",
	    verbose: false,
	    logger: {
	            log: null,
	            error: null
	        }
	    },
    foaccount:"fibos账号",
    eosaccount:"eos账号",
    pubKey:"FIBOS 公钥",// 生成方法 fibos getKeys.js
    priKey: "FIBOS 私钥"
}

config.priKey = config.mainChain.priKey;

function init(config){
   config = config
}

module.exports = config;