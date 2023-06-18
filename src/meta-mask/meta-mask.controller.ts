import { Body, Post, Controller } from '@nestjs/common';
import { MetaMaskService } from './meta-mask.service';

@Controller('meta-mask')
export class MetaMaskController {
  constructor(private readonly metaMaskService: MetaMaskService) {}

  @Post('authenticate')
  async authenticate(
    @Body() data: { message: string; signature: string; userAddress: string },
  ): Promise<boolean> {
    const { message, signature, userAddress } = data;
    return this.metaMaskService.verifySignature(
      message,
      signature,
      userAddress,
    );
  }
}
