import { Body, Controller, Post, Req } from "@nestjs/common/decorators";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor ( private authService: AuthService){}

    @Post('signup')
    signup(@Body() dto: AuthDto){
        return this.authService.signup(dto)
    }

    @Post('signIn')
    signIn(){
        this.authService.signin()
    }
}
