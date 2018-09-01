# fibos-js

## fibos 简介

[fibos 简介](doc/0-fibos简介.md)

## fibos 入门

[fibos 入门](doc/1-fibos入门.md)

## 参数配置

[配置四个参数](config.js)

```
priKey
pubKey
foaccount
eosaccount
```

#### config.js

```
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
    foaccount:"fibos账号",// 
    eosaccount:"eos账号",
    pubKey:"FIBOS 公钥",// 生成方法 fibos getKeys.js
    priKey: "FIBOS 私钥"
}
```

## 总流程


1. 安装fibos

2. 创建fibos账号

3. 创建eos账号

4. eos兑换fo

5. fo兑换eos


