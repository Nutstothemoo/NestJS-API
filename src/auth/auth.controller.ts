import { Body, Controller, Post, Req } from "@nestjs/common/decorators";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor ( private authService: AuthService){}

    @Post('signup')
    signup(@Body('email') email: String, @Body('password') password: String ){
        return this.authService.signup()
    }

    @Post('signIn')
    signIn(){
        this.authService.signin()
    }
}