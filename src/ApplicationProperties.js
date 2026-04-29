export const ApplicationProperties = {
  ETHERSCAN_API_KEY: 'GFKP5GD8TPFHC1VD6G77KY1P7ZK5KQGIZ2',
  ETHERSCAN_API_URL: 'https://danscan.io/api/v2/',
  ACTIVE_NETWORK: {
    name: 'bsc',
    chainId: '69',
    ensAddress: '',
    apiUrl: 'https://danscan.io/api/v2/',
    txUrl: 'https://danscan.io/tx/',
    displayName: 'Danny Mainnet',
    readonly: true,
    symbol: 'DAN',
    providerUrl: 'https://mainnet.danscan.io/',
  },
  NETWORKS: [
    {
      name: 'bsc',
      chainId: '69',
      ensAddress: '',
      apiUrl: 'https://danscan.io/api/v2/',
      txUrl: 'https://danscan.io/tx/',
      displayName: 'Danny Mainnet',
      readonly: true,
      symbol: 'DAN',
      providerUrl: 'https://mainnet.danscan.io/',
    },
  ],
  API_PROVIDERS: {
    etherscan: this.ETHERSCAN_API_KEY,
  },
  DEFAULT_CURRENCY: {key: 'USD', value: 0},
  DEFAULT_LANGUAGE: {
    code: 'en',
    icon: 'GB',
    name: 'English',
  },
  LANGUAGE_LIST: [
    {
      code: 'vi',
      icon: 'VN',
      name: 'Tiếng Việt',
    },
    {
      code: 'en',
      icon: 'GB',
      name: 'English',
    },
  ],
  TIME_FORMAT: 'h:mm:ss a, MMMM Do YYYY',
  TOKEN_URLS: {
    pancake: 'local',
  },
  COMMON_TOKENS: [
    {
      name: 'DAN',
      chainId: 69,
      symbol: 'DAN',
      decimals: 18,
      address: '0xBB37263380d2AD59d7CE807Bb9EFA1A697598e7F',
      logoURI: 'https://alchemy.mypinata.cloud/ipfs/bafkreifp7a2j7tpyqvvdyw5go234t6yabkkhmrckiqovffbpcs2272u6ui',
      isDAN: true,
    },
  ],
};
