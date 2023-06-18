import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { EthereumService } from './ether.service';

@Controller('ethereum')
export class EthereumController {
  constructor(private readonly ethereumService: EthereumService) {}

  @Get('contract/name')
  async getContractName(): Promise<string> {
    try {
      const contractName = await this.ethereumService.getContractName();
      return contractName;
    } catch (error) {
      return HttpStatus.INTERNAL_SERVER_ERROR;
    }
  }

  @Get('balance/:address')
  async getBalance(@Param('address') address: string): Promise<string> {
    try {
      const balance = await this.ethereumService.getBalance(address);
      return balance.toString();
    } catch (error) {
      return HttpStatus.INTERNAL_SERVER_ERROR;
    }
  }

  // Ajoutez d'autres méthodes de contrôleur pour les fonctionnalités supplémentaires
}
