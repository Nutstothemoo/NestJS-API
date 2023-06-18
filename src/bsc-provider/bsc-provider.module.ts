import { Module } from '@nestjs/common';
import { BINANCE_NETWORK, EthersModule } from 'nestjs-ethers';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    EthersModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        network: BINANCE_NETWORK,
        bscscan: config.get('API_KEY'),
        useDefaultProvider: true,
      }),
    }),
  ],
})
export class BscScanProviderModule {}
