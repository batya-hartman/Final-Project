import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Models/customer'
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccuontDetailsService {

  constructor(private http:HttpClient) { }

  getCustomerAcount(accountId:string):Observable<Customer>
  {
    return this.http.get<Customer>(`api/account?accountId=${accountId}`)
  }
}
