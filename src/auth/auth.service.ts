import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { AuthDto } from './dto';
import * as bcrypt from 'bcrypt';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';


@Injectable()
export class AuthService {
    constructor (
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService
        ){}   

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

        return this.signToken(user.id, user.email)

        } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === 'P2002'){
                throw new ForbiddenException (
                    'Credentials taken'
                )
            }
        }
        throw error;
        }
    }

    async signin(dto: AuthDto) {

            // trouver le user 

            const user =  await this.prisma.user.findUnique({
                where: {
                    email: dto.email,
                }
            })

            //  si l'utilisateur n'est pas trouvé 

            if (!user) throw new ForbiddenException('email incorrect')

            // compare password

            const passwordcompare = bcrypt.compareSync(dto.password, user.hash);
            if (!passwordcompare) throw new ForbiddenException ('password incorrect')

            return this.signToken(user.id, user.email)
    }
    async signToken ( userId: number,  email: string ): Promise<{access_token: string}> {
    
        const payload = {
            sub: userId,
            email
        };

        const secret = this.config.get('JWT_SECRET');
        
        const token =await this.jwt.signAsync(payload, {
            expiresIn: '20m',
            secret: secret
        })

        return {
            access_token: token,
        };
    }
}
