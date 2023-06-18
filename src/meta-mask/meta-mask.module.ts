import { Module } from '@nestjs/common';
import { MetaMaskController } from './meta-mask.controller';
import { MetaMaskService } from './meta-mask.service';

@Module({
  controllers: [MetaMaskController],
  providers: [MetaMaskService],
})
export class MetaMaskModule {}
