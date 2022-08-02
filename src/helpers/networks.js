export const networkConfig = {
  '0x13881': {
    chainId: 43114,
    chainName: 'Avalanche Network',
    currencyName: 'AVAX',
    currencySymbol: 'AVAX',
    rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
    blockExplorerUrl: ' https://snowtrace.io/',
  },
  '0x3': {
    currencySymbol: 'ETH',
    blockExplorerUrl: 'https://ropsten.etherscan.io/',
  },
};

export const getExplorer = (chain) => networkConfig[chain]?.blockExplorerUrl;
