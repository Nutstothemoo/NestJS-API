import { Injectable } from '@nestjs/common';
import { EthersSigner, InjectSignerProvider } from 'nestjs-ethers';
import { Wallet } from '@ethersproject/wallet';
import { VoidSigner } from '@ethersproject/abstract-signer';

@Injectable()
export class WalletService {
  constructor(
    @InjectSignerProvider()
    private readonly ethersSigner: EthersSigner,
  ) {}
  async createWallet(): Promise<string> {
    const wallet: Wallet = this.ethersSigner.createWallet(
      '0x4c94faa2c558a998d10ee8b2b9b8eb1fbcb8a6ac5fd085c6f95535604fc1bffb',
    );

    return wallet.getAddress();
  }
  async createWalletfromMnemonic(): Promise<string> {
    const wallet: Wallet = this.ethersSigner.createWalletfromMnemonic(
      'service basket parent alcohol fault similar survey twelve hockey cloud walk panel',
    );

    return wallet.getAddress();
  }
  async createVoidSigner(): Promise<string> {
    const wallet: VoidSigner = this.ethersSigner.createVoidSigner(
      '0x012363d61bdc53d0290a0f25e9c89f8257550fb8',
    );
    return wallet.getAddress();
  }
}
