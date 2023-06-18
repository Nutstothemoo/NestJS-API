import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class MetaMaskService {
  async verifySignature(
    message: string,
    signature: string,
    userAddress: string,
  ): Promise<boolean> {
    try {
      const messageHash = ethers.hashMessage(message);
      const recoveredAddress = ethers.verifyMessage(messageHash, signature);

      if (recoveredAddress.toLowerCase() === userAddress.toLowerCase()) {
        // La signature est valide, l'utilisateur est authentifié avec succès.
        console.log('User authenticated:', userAddress);
        return true;
      } else {
        // La signature ne correspond pas à l'adresse de l'utilisateur.
        console.warn('Invalid signature');
        return false;
      }
    } catch (error) {
      console.error('Signature verification error:', error);
      return false;
    }
  }
}
