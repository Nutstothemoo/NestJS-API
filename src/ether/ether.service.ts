import { Injectable } from '@nestjs/common';
import { ethers, Contract, InterfaceAbi, Wallet } from 'ethers';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EthereumService {
  private provider: ethers.JsonRpcProvider;
  private contract: Contract;
  private wallet: Wallet;

  constructor(config: ConfigService) {
    const rpcUrl = config.get('BSC_RPC_URL');
    this.provider = new ethers.JsonRpcProvider(rpcUrl);
    const privateKey = config.get('PRIVATE_KEY');
    this.wallet = new ethers.Wallet(privateKey, this.provider);

    // this.provider = new ethers.JsonRpcProvider(config.get('INFURA_END_POINT'));
    // const contractAddress = '<CONTRACT_ADDRESS>';
    // const contractAbi = <InterfaceAbi>['<ABI>'];
    // this.contract = new ethers.Contract(
    //   contractAddress,
    //   contractAbi,
    //   this.provider,
    // );
  }

  async getContractName(): Promise<string> {
    try {
      // Call a function on your smart contract
      const contractName = await this.contract.name();
      return contractName;
    } catch (error) {
      console.error('Error getting contract name:', error);
      throw error;
    }
  }

  async getBalance(address: string): Promise<ethers.BigNumberish> {
    try {
      const balance = await this.provider.getBalance(address);
      return balance;
    } catch (error) {
      console.error('Error getting balance:', error);
      throw error;
    }
  }

  async getContractData(): Promise<string> {
    try {
      const data = await this.contract.getData();
      return data;
    } catch (error) {
      console.error('Error calling contract function:', error);
      throw error;
    }
  }
}
