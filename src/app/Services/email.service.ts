import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EmailVerification } from '../Models/EmailVerification';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) { }

  sendVerificationEmail(email: string) {
    return this.http.get<boolean>
      (`${environment.accountURL}api/verification/verification?email=${email}`)
  }
  reSendVerificationEmail(email:string)
  {
    return this.http.get(`${environment.accountURL}api/verification/resend?email=${email}`)
  }
}
