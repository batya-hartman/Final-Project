import { Injectable } from '@angular/core';
import { transaction } from '../Models/transaction';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) { }
  createTransaction(transaction:transaction): Observable<boolean> {
    return this.http.post<boolean>(`${environment.basicURL}api/transaction`, transaction)
  }
}
