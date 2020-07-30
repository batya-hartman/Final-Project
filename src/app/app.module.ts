import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { LoginService } from './Services/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Components/register/register.component';
import { AccountDetailsComponent } from './Components/account-details/account-details.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MenuComponent } from './components/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { LogOutComponent } from './components/log-out/log-out.component';
import { MatButtonModule } from '@angular/material/button';
import { CreateTransactionComponent } from './Components/create-transaction/create-transaction.component';
import { OperationsHistoryComponent } from './Components/operations-history/operations-history.component';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { VerificationEmailComponent } from './Components/register/verification-email/verification-email.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AccountDetailsComponent,
    MenuComponent,
    LogOutComponent,
    CreateTransactionComponent,
    OperationsHistoryComponent,
    VerificationEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, MatInputModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'accountDetails', component: AccountDetailsComponent },
      { path: 'transaction', component: CreateTransactionComponent },
      { path: 'operations', component: OperationsHistoryComponent },
      { path:'verification',component: VerificationEmailComponent}

    ]),
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSelectModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
