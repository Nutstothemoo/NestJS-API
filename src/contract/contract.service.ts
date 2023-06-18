import {
  EthersContract,
  EthersSigner,
  InjectContractProvider,
  InjectSignerProvider,
  Contract,
  Network,
  Wallet,
} from 'nestjs-ethers';
import * as ABI from './utils/ABI.json';
import { Injectable } from '@nestjs/common';

@Injectable()
class ContractService {
  constructor(
    @InjectContractProvider()
    private readonly ethersContract: EthersContract,
    @InjectSignerProvider()
    private readonly ethersSigner: EthersSigner,
  ) {}
  async someMethod(): Promise<Network> {
    const wallet: Wallet = this.ethersSigner.createWallet(
      '0x4c94faa2c558a998d10ee8b2b9b8eb1fbcb8a6ac5fd085c6f95535604fc1bffb',
    );
    const contract: Contract = this.ethersContract.create(
      '0x012363d61bdc53d0290a0f25e9c89f8257550fb8',
      ABI,
      wallet,
    );

    return contract.signer.provider.getNetwork();
  }
}
