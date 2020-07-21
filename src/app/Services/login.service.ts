import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { register } from '../Models/register';
import { login } from '../Models/login';
import { environment } from '../../environments/environment';
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
      (`${environment.basicURL}api/login?loginCustomer.email=${login.email}&loginCustomer.password=${login.password}`)
  }
  register(newUser: register): Observable<boolean> {
    return this.http.post<boolean>(`${environment.basicURL}api/login`, newUser)
  }
}
