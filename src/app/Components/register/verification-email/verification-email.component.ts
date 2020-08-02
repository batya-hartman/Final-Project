import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EmailService } from '../../../Services/email.service';
import { LoginService } from 'src/app/Services/login.service';
import { register } from 'src/app/Models/register';
import { Router } from '@angular/router';
@Component({
  selector: 'app-verification-email',
  templateUrl: './verification-email.component.html',
  styleUrls: ['./verification-email.component.css']
})
export class VerificationEmailComponent implements OnInit {

  VerificationForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.min(1000), Validators.max(9999)])
  })

  constructor(private router: Router,
    private loginService: LoginService,
    private emailService: EmailService) { }
  message: string
  ngOnInit(): void {
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.VerificationForm.controls[controlName].hasError(errorName);
  }
  onSubmit() {
    this.message = "Sending request...";
    console.log(this.VerificationForm.value.code);
    let newUser = new register();
    newUser.firstName = sessionStorage.getItem('first');
    newUser.lastName = sessionStorage.getItem('last');
    newUser.password = sessionStorage.getItem('password');
    newUser.email = sessionStorage.getItem('email');
    newUser.verificationCode = this.VerificationForm.value.code
    this.loginService.register(newUser).subscribe(
      success => {
        if (success === true) {
          this.message = "Register succes!"
        }
        else
          this.message = "Registration failed, this email is probably already owned by another user."
      },
      error => this.registerFailed(error)
    )
  }
  registerFailed(err)
  {
    console.log(err);
    if (err.status==401) {
        this.message=err.error.error
    }
    else
     this.message = "Try again"
  }
  reSend() {
    this.emailService.reSendVerificationEmail(sessionStorage.getItem('email')).subscribe(
      sucsses => this.message = "A new password has been sent to you",
      err => this.message = "we are sorry, something went wrong."
    )
  }
  goLogin() {
    this.router.navigate(['login']);
  }
}

