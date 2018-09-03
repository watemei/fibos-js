# fibos入门

## 安装fibos

> 快速安装: curl -s https://fibos.io/download/installer.sh |sh

## 下载代码

> git clone https://github.com/watemei/fibos-js.git

> npm install

## 获取公私钥

```
var FIBOS = require("fibos.js");
var prikey = FIBOS.modules.ecc.randomKeySync(); //私钥
var pubkey = FIBOS.modules.ecc.privateToPublic(prikey); //公钥
console.log("公钥: %s\n私钥: %s",pubkey,prikey)
```
[在线创建](https://fibos.xyz/)

### 代码创建

> fibos getKyes.js //获取公私钥

## 注册fibos账号

```
curl -l -H "Content-type: application/json" -X POST -d '{"account":"wattm5211314","pubkey":"FO7LEjyZibQyqUNuLMZUWX8ahN8ryxWdhh59NfBD2n2HSAn3vpYd"}' http://tunnel.fibos.io/1.0/app/token/create
```

tips : account 数字 1-5 字母 a-z 必须12位

## 注册EOS账号

1. 使用tokenpocket

[EOS注册账号小白篇, 使用app注册EOS账号](https://blog.csdn.net/itleaks/article/details/80797129)

2. 找已有用户来激活

[eos账户注册eos账号怎么创建](https://jingyan.baidu.com/article/380abd0a2e95bf1d90192cc9.html)

[OTCBTC如何提币EOS到主网账号](https://support.otcbtc.com/hc/zh-cn/articles/360005164851-如何提币EOS到主网账号)

## EOS兑换FO

> fibos eos2fo.js

## FO兑换EOS

> fibos fo2eos.js

