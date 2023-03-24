import { Injectable, Req } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as bcrypt from 'bcrypt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { ForbiddenException } from '@nestjs/common/exceptions';

@Injectable()
export class AuthService {
    constructor (private prisma: PrismaService){}   

    async signup(dto: AuthDto){
        try {

        // hash du mot de passe

        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(dto.password,  salt);

        // enregistrement du user 

        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash,
            }
        });

        return user;

        } catch (error) {
        if (error instanceof PrismaClientKnownRequestError){
            if (error.code === 'P2002'){
                throw new ForbiddenException (
                    'Credentials taken'
                )
            }
        }
        throw error;
        }
    }
    signin(){
        return 'imlogin'
    }
}
