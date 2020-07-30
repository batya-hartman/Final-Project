import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EmailVerification } from '../Models/EmailVerification';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  email: string = "";
  constructor(private http: HttpClient) { }
  sendVerificationEmail(verificatioEmailDelails: EmailVerification) {
    debugger;

    return this.http.post<boolean>
      (`${environment.accountURL}api/email/verification`, verificatioEmailDelails)
  }

}
