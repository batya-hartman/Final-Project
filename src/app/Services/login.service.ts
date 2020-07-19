import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Models/customer';
import { Observable } from 'rxjs';
import { register } from '../Models/register';
import { login } from '../Models/login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: login): Observable<number> {
    if(login.email==undefined||login.password==undefined){
    alert("undefined")
    return
  }
    return this.http.get<number>
      (`api/account?loginCustomer.email=${login.email}&loginCustomer.Password=${login.password}`)
  }
  register(newUser: register): Observable<boolean> {
    return this.http.post<boolean>(`api/customer`, newUser)
  }
}
