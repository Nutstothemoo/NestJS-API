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
        
        delete user.hash;

        return user;

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
        try {
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


            delete user.hash;

            return user;

        } catch {

        }



    }
}
