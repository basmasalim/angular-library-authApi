import { Observable } from "rxjs";

export abstract class AuthAPI {
    abstract login(data: any): Observable<any>;
    abstract register(data: any): Observable<any>;
    abstract changePassword(data: any): Observable<any>;
    abstract deleteAccount(data: any): Observable<any>;
    abstract editProfile(data: any): Observable<any>;
    abstract logout(data: any): Observable<any>;
    abstract getUserInfo(): Observable<any>;
    abstract forgetPassword(data: any): Observable<any>;
    abstract verifyCode(data: any): Observable<any>;
    abstract resetPassword(data: any): Observable<any>;
}