import { Component, OnInit, ViewChild } from '@angular/core';
import { AccuontDetailsService } from 'src/app/Services/accuont-details.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {
  constructor(private accuontDetailsService: AccuontDetailsService) { }

  ngOnInit(): void {
  }
  logOut() {
    //sessionStorage.clear();
    //this.accuontDetailsService.removeCustomerDetails();
  }
}
