"use strict";
var global = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl: 'https://www.masariwallet.com/api/',
	mainnetExplorerUrl: "https://msrchain.net/",
	mainnetExplorerUrlHash: "https://msrchain.net/tx/{ID}",
	mainnetExplorerUrlBlock: "https://msrchain.net/block/{ID}",
	testnetExplorerUrl: "http://testnet.msrchain.net/",
	testnetExplorerUrlHash: "http://testnet.msrchain.net/tx/{ID}",
	testnetExplorerUrlBlock: "http://testnet.msrchain.net/block/{ID}",
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
	donationAddresses: [
		'5qfrSvgYutM1aarmQ1px4aDiY9Da7CLKKDo3UkPuUnQ7bT7tr7i4spuLaiZwXG1dFQbkCinRUNeUNLoNh342sVaqTaWqvt8',
		'5nYWvcvNThsLaMmrsfpRLBRou1RuGtLabUwYH7v6b88bem2J4aUwsoF33FbJuqMDgQjpDRTSpLCZu3dXpqXicE2uSWS4LUP',
		'9ppu34ocgmeZiv4nS2FyQTFLL5wBFQZkhAfph7wGcnFkc8fkCgTJqxnXuBkaw1v2BrUW7iMwKoQy2HXRXzDkRE76Cz7WXkD'
	]
};