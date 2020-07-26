import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionService } from '../../Services/transaction.service';
import { transaction } from '../../Models/transaction';
@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {
transaction:transaction;
  message: string = "";
  value = 'Clear me';
  createTransactionForm = new FormGroup({
    toAccount: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required,Validators.min(1),Validators.max(1000000)])
 });
  constructor(private transactionService:TransactionService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    // this.transaction.toAccountId=this.createTransactionForm.value.;
    // this.transaction.amount=
    this.transactionService.createTransaction(this.createTransactionForm.value).subscribe(
      success => {
        this.message = "Your transaction was successfully received!"
      },
      error=>{
        this.message = "Your transaction failed :("
      }
    );
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.createTransactionForm.controls[controlName].hasError(errorName);
  }
}
