import { Injectable } from '@angular/core';
import { AuthAPI } from './base/AuthAPI';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthEndPoint } from './enums/AuthAPI.endpoint';
import { AuthAPIAdapter } from './adapter/auth-api.adapter';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AuthAPI {

  constructor(private httpClient:HttpClient, private authAPIAdapter:AuthAPIAdapter) { }

  login(data: any): Observable<any> {
    return this.httpClient.post(AuthEndPoint.LOGIN, data).pipe(
      map(res => this.authAPIAdapter.adapt(res)),
      catchError(err => of([]))
    )
  }

  register(data: any): Observable<any> {
    return this.httpClient.post(AuthEndPoint.REGISTER, data);
  }

  changePassword(data: any): Observable<any> {
    return this.httpClient.post(AuthEndPoint.CHANGE_PASSWORD, data);
  }

  deleteAccount(data: any): Observable<any> {
    return this.httpClient.post(AuthEndPoint.DELETE_ACCOUNT, data);
  }

  editProfile(data: any): Observable<any> {
    return this.httpClient.post(AuthEndPoint.EDIT_PROFILE, data);
  }

  logout(data: any): Observable<any> {
    return this.httpClient.post(AuthEndPoint.LOGOUT, data);
  }

  getUserInfo(): Observable<any> {
    return this.httpClient.get(AuthEndPoint.GET_USER_INFO);
  }

  forgetPassword(data: any): Observable<any> {
    return this.httpClient.post(AuthEndPoint.FORGET_PASSWORD, data);
  }

  verifyCode(data: any): Observable<any> {
    return this.httpClient.post(AuthEndPoint.VERIFY_CODE, data);
  }

  resetPassword(data: any): Observable<any> {
    return this.httpClient.post(AuthEndPoint.RESET_PASSWORD, data);
  }
}
