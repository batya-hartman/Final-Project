import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionService } from '../../Services/transaction.service';
import { transaction } from '../../Models/transaction';
@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {
  message: string = "";
  value = 'Clear me';
  tran: transaction;
  createTransactionForm = new FormGroup({
    toAccountId: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required, Validators.min(1), Validators.max(1000000)])
  });
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.tran = new transaction(
      sessionStorage.getItem("currentCustomer"),
      this.createTransactionForm.value.toAccountId,
      this.createTransactionForm.value.amount * 100)
      if(this.tran.fromAccountId!==this.tran.toAccountId){
    this.transactionService.createTransaction(this.tran).subscribe(
      success => {
        this.message = "Your transaction was successfully received!"
      },
      err => {
          this.message = "Your transaction failed :( ";
      });
    }
    else
    this.message="Not Makes sense to transfer to yourself";
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.createTransactionForm.controls[controlName].hasError(errorName);
  }
}
