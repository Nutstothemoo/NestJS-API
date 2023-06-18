interface EthersModuleOptions {
  /**
   * Optional parameter for connection, can be a Network object
   * or the name of a common network as a string (e.g. "homestead")
   * If no network is provided, homestead (i.e. mainnet) is used.
   * The network may also be a URL to connect to,
   * such as http://localhost:8545 or wss://example.com.
   * @see {@link https://docs.ethers.io/v5/api/providers/types/#providers-Networkish}
   */
  network?: Network | string;

  /**
   * Optional parameter for Alchemy API Token
   * @see {@link https://alchemyapi.io}
   */
  alchemy?: string;

  /**
   * Optional parameter for Etherscan API Token
   * @see {@link https://etherscan.io}
   */
  etherscan?: string;

  /**
   * Optional parameter for Bscscan API Token
   * @see {@link https://bscscan.com/}
   */
  bscscan?: string;

  /**
   * Optional parameter for use Cloudflare Provider
   * @see {@link https://cloudflare-eth.com}
   */
  cloudflare?: boolean;

  /**
   * Optional parameter for Infura Project ID
   * or InfuraProviderOptions(applicationId, applicationSecretKey)
   * @see {@link https://infura.io}
   */
  infura?: InfuraProviderOptions | string;

  /**
   * Optional parameter for Pocket Network Application ID
   * or PocketProviderOptions(projectId, projectSecret)
   * @see {@link https://pokt.network}
   */
  pocket?: PocketProviderOptions | string;

  /**
   * Optional parameter for Moralis API Token
   * or MoralisProviderOptions(apiKey, region)
   * @see {@link https://moralis.io/}
   */
  moralis?: MoralisProviderOptions | string;

  /**
   * Optional parameter for Ankr API Token
   * or AnkrProviderOptions(apiKey, projectSecret)
   * @see {@link https://www.ankr.com/}
   */
  ankr?: AnkrProviderOptions | string;

  /**
   * Optional parameter for a custom StaticJsonRpcProvider
   * You can connect using an URL, ConnectionInfo or an array of both.
   * @see {@link https://docs.ethers.io/v5/api/providers/jsonrpc-provider/#StaticJsonRpcProvider}
   * @ses {@link https://docs.ethers.io/v5/api/utils/web/#ConnectionInfo}
   */
  custom?: ConnectionInfo | string | (ConnectionInfo | string)[];

  /**
   * Optional parameter the number of backends that must agree
   * (default: 2 for mainnet, 1 for testnets)
   */
  quorum?: number;

  /**
   * Optional parameter if this option is false, EthersModule won't wait until
   * the providers are ready. If this option is true, EthersModule  will wait
   * until the network has heen established for all the providers.
   * @see {@link https://docs.ethers.io/v5/api/providers/provider/#Provider-ready}
   */
  waitUntilIsConnected?: boolean;

  /**
   * Optional parameter if this option is false, EthersModule will try to connect
   * with the credentials provided in options. If you define more than one provider,
   * EthersModule will use the FallbackProvider to send multiple requests simultaneously.
   */
  useDefaultProvider?: boolean;

  /**
   * Optional parameter if this option is true, EthersModule will disable
   * the console.log in the ethers.js library.
   */
  disableEthersLogger?: boolean;

  /**
   * Optional parameter to associate a token name to EthersProvider,
   * the token is used to request an instance of a class by the same name.
   * This can be useful when you want multiple intances of EthersProvider.
   */
  token?: string;
}
