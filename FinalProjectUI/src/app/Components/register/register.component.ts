import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';
import { register } from '../../Models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message: string = ""

  constructor(private loginService: LoginService, private router: Router, private fb: FormBuilder) { }

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  })//,{ Validator: this.checkIfMatchingPasswords('Password', 'confirmPassword')})

  // registerForm = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: ['', Validators.required],
  //   title: ['', Validators.required],
  //   email: ['', Validators.required],
  //   password: ['', Validators.required],
  //   confirmPassword: ['', Validators.required]
  // }, { validator: this.checkIfMatchingPasswords('password', 'confirmPass') });

  // checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
  //   return (group: FormGroup) => {
  //     let passwordInput = group.controls[passwordKey],
  //       passwordConfirmationInput = group.controls[passwordConfirmationKey];
  //     if (passwordInput.value !== passwordConfirmationInput.value) {
  //       return passwordConfirmationInput.setErrors({ notEquivalent: true })
  //     }
  //     else {
  //       return passwordConfirmationInput.setErrors(null);
  //     }
  //   }
  // }

  ngOnInit(): void {
  }
  confirmPassword(password: string, confirm: string) {
    return password === confirm;
  }

  onSubmit() {

    const newCustomer:register = this.registerForm.value
    if (!this.confirmPassword(newCustomer.password, this.registerForm.controls.confirmPassword.value)) {
      alert("password and confirm are not same");
      return
    }
    this.message = "Sending request...";
    this.loginService.register(newCustomer).subscribe(
      success => {
        if (success == true) {
          this.message = "Register succes!"
          this.goLogin()
        }
        else
          this.message = "Registration failed, this email is probably already owned by another user."
      },
      error => { console.log(error), this.message = "Try again" }
    )
  }
  goLogin() {
    this.router.navigate(['login']);
  }
}