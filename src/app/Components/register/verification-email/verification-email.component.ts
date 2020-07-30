import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EmailService } from '../../../Services/email.service';
import { EmailVerification } from '../../../Models/EmailVerification'
@Component({
  selector: 'app-verification-email',
  templateUrl: './verification-email.component.html',
  styleUrls: ['./verification-email.component.css']
})
export class VerificationEmailComponent implements OnInit {

  VerificationForm = new FormGroup({
    verificationCode: new FormControl('', [Validators.required])
  })

  constructor(private emailSevice: EmailService) { }

  ngOnInit(): void {
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.VerificationForm.controls[controlName].hasError(errorName);
  }
  onSubmit() {
  
    const verificatioEmailDelails = {} as EmailVerification;
    // verificatioEmailDelails.email = this.emailSevice.email;
    verificatioEmailDelails.email="cyehudit10@gmail.com";
    const code=this.VerificationForm.value.verificationCode;
    verificatioEmailDelails.verificationCode = code; 
     debugger;
    this.emailSevice.sendVerificationEmail(verificatioEmailDelails).subscribe();
  }
}

