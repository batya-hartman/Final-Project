import { Component, OnInit } from '@angular/core';
import { AccuontDetailsService } from '../../Services/accuont-details.service';
import { Customer } from '../../Models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor(public accuontDetailsService: AccuontDetailsService,private router:Router) { }
  customer: Customer
  ngOnInit(): void {
    const accountId = sessionStorage.getItem('currentCustomer');
    this.accuontDetailsService.getCustomerAcount(accountId).subscribe(
      success => {
        this.accuontDetailsService.account = success
      },
      err => console.log(err)
    )
  }
  goCreateTransaction()
  {
this.router.navigate(["transaction"]);
  }
}