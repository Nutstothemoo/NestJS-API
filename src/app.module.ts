import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { EthereumController } from './ether/ether.controller';
import { EthereumService } from './ether/ether.service';
import { EthereumModule } from './ether/ether.module';
import { BscScanProviderModule } from './bsc-provider/bsc-provider.module';
import { BscScanController } from './bsc-provider/bsc-provider.controller';
import { WalletService } from './wallet/wallet.service';
import { SmartContractService } from './smart-contract/smart-contract.service';
import { ContractService } from './contract/contract.service';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    // EthereumModule,
    BscScanProviderModule,
  ],
  controllers: [
    // EthereumController,
    BscScanController,
  ],
  providers: [
    // EthereumService
  WalletService,
    SmartContractService,
    ContractService],
})
export class AppModule {}
