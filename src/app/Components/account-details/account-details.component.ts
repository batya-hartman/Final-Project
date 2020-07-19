import { Component, OnInit } from '@angular/core';
import { AccuontDetailsService } from 'src/app/Services/accuont-details.service';
import { Customer } from 'src/app/Models/customer';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private accuontDetailsService:AccuontDetailsService) { }
customer:Customer
  ngOnInit(): void {
    const accountId = sessionStorage.getItem('currentCustomer')
    this.accuontDetailsService.getCustomerAcount(accountId).subscribe(
      success=>{
        this.customer=success
       },
       err=>console.log(err)       
    )
  }
}