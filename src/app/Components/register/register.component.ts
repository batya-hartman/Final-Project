import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
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
  registerForm: FormGroup;

  constructor(private loginService: LoginService, private router: Router) { }

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

  onSubmit() {
    const newCustomer: register = this.registerForm.value
    this.message = "Sending request...";
    this.loginService.register(newCustomer).subscribe(
      success => {
        if (success === true) {
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