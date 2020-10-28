require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remind method inflict private fold square'; 
let testAccounts = [
"0x1c5570b7838ec3317961499bd2ef81985f7267e5a315a7056c7b7b90d5e9af63",
"0x46d098f19362f519e7f47ded67e87d1c8383924da5bb2ce17e90cbb9a234ad4c",
"0xbffd08e81db0346a458e49fc1e21193356922bd78c52eefb1653beac1d6beafb",
"0xcc36c16e5dc6db537b0e50c1643bc725e96664fe91bb2d5ab260743dc67d121a",
"0xd20f00b0c19f456d21ecb4037ef4ca48c69c296da07240bcbdf49c9603714714",
"0xdaaf83b1476f92a7686786d76804e4d797a81b033dc79c3285925026e91b7542",
"0x12e5d771cb448212be52949732d028d76ad978e0850ab68cb75098db334608d8",
"0x0aed96318752fc3da3df5207d1f76a185f98197644d9a2f1da412462b62c474b",
"0x4ec3078ba535efc59ea9ddd8693b55df63272de430bb6048977faf1fd550f658",
"0xae5301567ba64bcbdb11db0fd45522dfe2a43fe790e35127438f01f516ecd707"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: 80001,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
