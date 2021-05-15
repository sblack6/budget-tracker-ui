import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadTransactionsComponent } from '../upload-transactions/upload-transactions.component';
import { SUBMIT } from '../../model/constants'
import { BudgetGridComponent } from '../budget-grid/budget-grid.component';
import { BudgetService } from 'src/app/services/budget.service';
import { MonthlySpending } from 'src/app/model/monthly-spending';
import { MonthViewModel } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';

@Component({
  selector: 'app-budget-home',
  templateUrl: './budget-home.component.html',
  styleUrls: ['./budget-home.component.css']
})
export class BudgetHomeComponent implements OnInit {

  @ViewChild(BudgetGridComponent) budgetGrid!: BudgetGridComponent;
  defaultBudget: any

  constructor(private modalService: NgbModal, private budgetService: BudgetService) { }

  ngOnInit(): void { 
    this.displayDefaultBudget()
  }

  uploadTransactions() {
    const modalRef = this.modalService.open(UploadTransactionsComponent)
    modalRef.closed.subscribe(message => {
      if (message === SUBMIT) {
        this.budgetGrid.update()
      }
    })
  }

  displayDefaultBudget() {
    this.budgetService.getDefaultBudget().subscribe(
      data => {
        console.log(`Got default budget: ${JSON.stringify(data, null, 2)}`)
        this.defaultBudget = data
      },
      error => console.log(`Error getting default budget: ${error}`)
    )
 }
}
