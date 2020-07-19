import { login } from './login'
export interface register extends login {
    firstName: string,
    lastName: string,
}
