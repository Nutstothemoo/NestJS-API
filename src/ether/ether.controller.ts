import { Controller, Get, HttpCode, Param, Res } from '@nestjs/common';
import { EthereumService } from './ether.service';

@Controller('ethereum')
export class EthereumController {
  constructor(private readonly ethereumService: EthereumService) {}

  @Get('contract/name')
  @HttpCode(200)
  async getContractName(): Promise<string> {
    const contractName = await this.ethereumService.getContractName();
    return contractName;
  }

  @Get('balance/:address')
  @HttpCode(200)
  async getBalance(@Param('address') address: string): Promise<string> {
    const balance = await this.ethereumService.getBalance(address);
    return balance.toString();
  } // Ajoutez d'autres méthodes de contrôleur pour les fonctionnalités supplémentaires
}
