import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIAdapter implements Adapter {

  constructor() { }

  adapt(data:any){
    return {
      massage:data.message,
      token: data.token,
      userEmail: data.user.email,
    }
  }
}
