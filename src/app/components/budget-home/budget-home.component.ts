import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadTransactionsComponent } from '../upload-transactions/upload-transactions.component';
import { BUDGET, DEFAULT_BUDGET_DATE, SUBMIT } from '../../model/constants'
import { BudgetGridComponent } from '../budget-grid/budget-grid.component';
import { BudgetService } from 'src/app/services/budget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-home',
  templateUrl: './budget-home.component.html',
  styleUrls: ['./budget-home.component.css']
})
export class BudgetHomeComponent implements OnInit {

  @ViewChild(BudgetGridComponent) budgetGrid!: BudgetGridComponent;
  defaultBudget: any

  constructor(private modalService: NgbModal, private budgetService: BudgetService, private router: Router) { }

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
        this.defaultBudget = data
      },
      error => console.log(`Error getting default budget: ${error}`)
    )
 }

 editDefaultBudget() {
  this.router.navigate(['/budget/edit', BUDGET, DEFAULT_BUDGET_DATE])
 }
}
