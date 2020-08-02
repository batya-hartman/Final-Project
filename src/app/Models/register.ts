import { login } from './login'
export class register implements login {
    
    public email: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public verificationCode: number;
}
