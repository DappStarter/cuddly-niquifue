require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name rescue place concert harvest crisp flock gather'; 
let testAccounts = [
"0x0cf6933c35a567188fe6af862fdc289ba0ce8e25bb1088d72071b895d2cd1f8d",
"0xed090975293d7e9ec077c572de2e6456aa5af9ef39508ba7b316d42b26a869c0",
"0xbdfed78e94dc1e096d7644da4557e325a2865e283ae8681a7d75baaa43b74b3d",
"0xae5ed0c31a829a5ca3e11150e73ebb562fa8d5c434d0ee10d5a3d92a8309b90a",
"0x3d8edab4040249e723c29666dbdfb08df5ca95ba4154b574661f33617c0fc849",
"0x76fa4b734f75c3e438a01fd617db3bf12d485ff16e1fe2f02a81cba2296b6e8d",
"0xa039610108f3710f27711d2f0c0cd2c64290691ee7d33cd2f1588c27c3771d83",
"0x0034baff8954afcd0ed21829fb0637327d4e120783e0853918efd0e3b6cfd70e",
"0x2ea6216f1d33f7a805986165d15ec1e40f6dd80f1c3039cd75c968a6f4c8c454",
"0x32b0607332d3b5c30b68d525732bd79da04cc4ab092c6ed2b8ff1435c8f9f342"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
