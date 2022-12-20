import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        username: string;
        access_token: string;
        expiredAt: number;
    }>;
    changePassword(changePasswordDto: ChangePasswordDto): Promise<any>;
}
