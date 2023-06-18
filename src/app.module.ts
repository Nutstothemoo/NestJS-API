import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { EthereumController } from './ether/ether.controller';
import { EthereumService } from './ether/ether.service';
import { EtherModule } from './ether/ether.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    EtherModule,
  ],
  controllers: [EthereumController],
  providers: [EthereumService],
})
export class AppModule {}
