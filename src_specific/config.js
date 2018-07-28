"use strict";
var global = typeof window !== 'undefined' ? window : self;
global.config = {
    apiUrl: 'https://www.masariwallet.com/api/',
    mainnetExplorerUrl: "https://msrchain.net/",
    testnetExplorerUrl: "http://testnet.msrchain.net/",
    testnet: false,
    coinUnitPlaces: 12,
    txMinConfirms: 10,
    txCoinbaseMinConfirms: 60,
    addressPrefix: 28,
    integratedAddressPrefix: 29,
    addressPrefixTestnet: 33,
    integratedAddressPrefixTestnet: 34,
    subAddressPrefix: 52,
    subAddressPrefixTestnet: 73,
    feePerKB: new JSBigInt('400000000'),
    dustThreshold: new JSBigInt('1000000000'),
    defaultMixin: 12,
    idleTimeout: 30,
    idleWarningDuration: 20,
    coinSymbol: 'MSR',
    openAliasPrefix: "msr",
    coinName: 'Masari',
    coinUriPrefix: 'masari:',
    avgBlockTime: 120,
    maxBlockNumber: 500000000,
};
//# sourceMappingURL=config.js.map