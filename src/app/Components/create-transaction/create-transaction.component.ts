import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionService } from '../../Services/transaction.service';
import { transaction } from '../../Models/transaction';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {
  message: string = "";
  value = 'Clear me';
  tran: transaction;
  submited:boolean=false;
  createTransactionForm = new FormGroup({
    toAccountId: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required, Validators.min(1), Validators.max(1000000)])
  });
  constructor(private transactionService: TransactionService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submited = true;
    this.tran = new transaction(
      sessionStorage.getItem("currentCustomer"),
      this.createTransactionForm.value.toAccountId,
      this.createTransactionForm.value.amount * 100)

      if(this.tran.fromAccountId===this.tran.toAccountId){
        
        this.message="Not Makes sense to transfer to yourself";
      }
       else
       {
    this.transactionService.createTransaction(this.tran).subscribe(
      success => {
        this.message = `Your transaction was successfully received!,
        It may take a few minutes for the new data to appear in the account balance`
      },
      err => {
          this.message = "Your transaction failed :( ";
      });
    }
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.createTransactionForm.controls[controlName].hasError(errorName);
  }
  goShowDetails()
  {
    this.router.navigate(['accountDetails']);
  }
}
