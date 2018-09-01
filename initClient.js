var FIBOS = require("fibos.js");

function initClient(chainConfig) {
    return FIBOS(chainConfig);
}

module.exports = initClient;

