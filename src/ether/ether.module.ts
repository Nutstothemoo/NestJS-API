import { Module } from '@nestjs/common';
import { EthersModule, ARBITRUM_RINKEBY_NETWORK } from 'nestjs-ethers';

@Module({
  imports: [
    EthersModule.forRoot({
      network: ARBITRUM_RINKEBY_NETWORK,
      alchemy: '845ce4ed0120d68eb5740c9160f08f98',
      etherscan: 'e8cce313c1cfbd085f68be509451f1bab8',
      cloudflare: true,
      infura: {
        projectId: 'd71b3d93c2fcfa7cab4924e63298575a',
        projectSecret: 'ed6baa9f7a09877998a24394a12bf3dc',
      },
      pocket: {
        applicationId: '9b0afc55221c429104d04ef9',
        applicationSecretKey: 'b5e6d6a55426712a42a93f39555973fc',
      },
      quorum: 1,
      useDefaultProvider: true,
    }),
  ],
})
export class EthereumModule {}
