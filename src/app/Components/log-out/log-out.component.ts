import { Component, OnInit, ViewChild } from '@angular/core';
import { AccuontDetailsService } from '../../Services/accuont-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {
  constructor(public accuontDetailsService: AccuontDetailsService,
    private router:Router) { }

  ngOnInit(): void {
  }
  logOut() {
    sessionStorage.clear();
    this.accuontDetailsService.removeCustomerDetails();
    this.router.navigate(['login']);
  }
}
