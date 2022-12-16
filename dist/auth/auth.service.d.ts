import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.model';
import { UserService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    validateUserCredentials(username: string, password: string): Promise<any>;
    loginWithCredentials(user: User): Promise<{
        username: string;
        userId: string;
        access_token: string;
        expiredAt: number;
    }>;
}
