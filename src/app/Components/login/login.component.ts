import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { Customer } from '../../Models/customer';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { login } from 'src/app/Models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {//implements OnInit{
  message: string = ""

  constructor(
    private loginService: LoginService,
    private router: Router) { }
  //ngOnInit(): void {
    loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.minLength(6))
   });
 // }
//loginForm:FormGroup;

  
  onSubmit() {
    this.message = "Sending request...";
    let current:login 
    current= this.loginForm.value      
    this.loginService.login(current).subscribe(
      success => {
        this.message = "Login succeded",
          sessionStorage.setItem("currentCustomer", success.toString()),
          this.router.navigate(['/accountDetails'])
      }, 
      error => {
        if(error.status===401||404){
         this.message = "Your email or password are not correct, try again or go register."} 
         console.log(error)
        }
    )
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }
  goRegister() {
    this.router.navigate(['register']);
  }
}