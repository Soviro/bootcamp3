import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from 'create-auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    getHello(): string {
        return this.authService.getHello();
    }

    @Post()
    createAuth(@Body() data:CreateAuthDto): String{
        return this.authService.createAuth();
    }

    @Put()
    updateAuth(): String{
        return this.authService.updateAuth();
    }
}