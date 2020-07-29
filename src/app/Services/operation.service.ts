import { Injectable } from '@angular/core';
import { PaginationService } from './pagination.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private headers = new HttpHeaders();
  private endpoint = `api/operationsHistory`;
  constructor(
    private http: HttpClient,
    private paginationService: PaginationService) {
    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');
  }
  getAll<T>(): Observable<any> {
    debugger;
    const accountId = sessionStorage.getItem('currentCustomer')
    const mergedUrl = `${environment.accountURL+this.endpoint}` +
      `?accountid=${accountId}&Page=1&pageCount=${this.paginationService.pageSize}`;
      // const mergedUrl = `${environment.accountURL+this.endpoint}` +
      // `?accountid=${accountId}&Page=${this.paginationService.page}&pageCount=${this.paginationService.pageSize}`;

    return this.http.get(mergedUrl, { observe: 'response' });
  }
getSingle<T>(id: number) {
  return this.http.get<T>(`${environment.accountURL+this.endpoint}${id}`);
}
add<T>(toAdd: T) {
  return this.http.post<T>(environment.accountURL+this.endpoint, toAdd, { headers: this.headers });
}
update<T>(url: string, toUpdate: T) {
  return this.http.put<T>(url,
    toUpdate,
    { headers: this.headers });
}
delete (url:string) {
  return this.http.delete(url);
}
}
