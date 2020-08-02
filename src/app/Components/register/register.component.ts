import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';
import { register } from '../../Models/register';
import { EmailService } from '../../Services/email.service';
import { EmailVerification } from 'src/app/Models/EmailVerification';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message: string = ""
  registerForm: FormGroup;
  showVerification = false;
  constructor(private loginService: LoginService,
    private router: Router, private emailService: EmailService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  }
  goLogin() {
    this.router.navigate(['login']);
  }
  onSubmit() {
    const newCustomer: register = this.registerForm.value
    
    sessionStorage.setItem('first', newCustomer.firstName);
    sessionStorage.setItem('last', newCustomer.lastName);
    sessionStorage.setItem('email', newCustomer.email);
    sessionStorage.setItem('password', newCustomer.password);

    this.emailService.sendVerificationEmail(newCustomer.email).subscribe();
    this.router.navigate(['verification'])
  }
}