import { Injectable } from '@nestjs/common';
import { ethers, Contract, InterfaceAbi } from 'ethers';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EthereumService {
  private provider: ethers.JsonRpcProvider;
  private contract: Contract;

  constructor(config: ConfigService) {
    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page

    // const provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask requires requesting permission to connect users accounts
    // await provider.send('eth_requestAccounts', []);
    this.provider = new ethers.JsonRpcProvider(config.get('INFURA_END_POINT'));

    const contractAddress = '<CONTRACT_ADDRESS>';
    const contractAbi = <InterfaceAbi>['<ABI>'];
    this.contract = new ethers.Contract(
      contractAddress,
      contractAbi,
      this.provider,
    );
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
