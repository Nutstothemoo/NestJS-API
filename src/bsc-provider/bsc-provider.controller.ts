import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Post('/transaction')
  async sendTransaction(@Body() transactionData: any) {
    try {
      // Créer une instance du fournisseur de contrats pour signer les transactions
      const signer = this.bscProvider.

      // Construire l'objet de transaction avec les données reçues
      const transaction = {
        to: transactionData.to,
        value: transactionData.value,
        gasLimit: transactionData.gasLimit,
        gasPrice: transactionData.gasPrice,
        data: transactionData.data,
      };

      // Signer et envoyer la transaction
      const response = await signer.sendTransaction(transaction);

      return { transactionHash: response.hash };
    } catch (error) {
      console.error("Erreur lors de l'envoi de la transaction :", error);
      throw error;
    }
  }
}
