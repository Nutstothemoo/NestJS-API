import { Controller, Get, Param } from '@nestjs/common';
import { InjectEthersProvider, BscscanProvider } from 'nestjs-ethers';

@Controller('/bscScan')
export class BscScanController {
  constructor(
    @InjectEthersProvider()
    private readonly bscProvider: BscscanProvider,
  ) {}
  @Get('/gas-price')
  async getGasPrice() {
    const gasPrice: any = await this.bscProvider.getGasPrice();
    return { gasPrice: gasPrice.toString() };
  }

  @Get('/balance/:address')
  async getBalance(@Param('address') address: string) {
    const balance: any = await this.bscProvider.getBalance(address);
    return { balance: balance.toString() };
  }

  @Get('/transaction/:hash')
  async getTransaction(@Param('hash') hash: string) {
    const transaction: any = await this.bscProvider.getTransaction(hash);
    return { transaction };
  }
}
