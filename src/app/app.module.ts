import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetGridComponent } from './components/budget-grid/budget-grid.component';
import { BudgetService } from './services/budget.service';
import { AgGridModule } from 'ag-grid-angular';
import { ModifyBudgetComponent } from './components/modify-budget.component';
import { BudgetHomeComponent } from './components/budget-home/budget-home.component';
import { UploadTransactionsComponent } from './components/upload-transactions/upload-transactions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditBudgetComponent } from './components/edit-budget/edit-budget.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetGridComponent,
    ModifyBudgetComponent,
    BudgetHomeComponent,
    UploadTransactionsComponent,
    EditBudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [ BudgetService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
