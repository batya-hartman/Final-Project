import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Models/customer'
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccuontDetailsService {
  account: Customer;
  constructor(private http: HttpClient) { }

  getCustomerAcount(accountId: string): Observable<Customer> {
    return this.http.get<Customer>(`${environment.basicURL}api/account/info?accountId=${accountId}`)
  }
  removeCustomerDetails() {
    this.account = undefined;
  }
}
