import {
  EthersContract,
  InjectContractProvider,
  Contract,
  Network,
} from 'nestjs-ethers';
import * as ABI from './utils/ABI.json';
import { Injectable } from '@nestjs/common';

@Injectable()
class SmartContractService {
  constructor(
    @InjectContractProvider()
    private readonly ethersContract: EthersContract,
  ) {}
  async someMethod(): Promise<Network> {
    const contract: Contract = this.ethersContract.create(
      '0x012363d61bdc53d0290a0f25e9c89f8257550fb8',
      ABI,
    );

    return contract.provider.getNetwork();
  }
}
