import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadTransactionsComponent } from '../upload-transactions/upload-transactions.component';
import { SUBMIT } from '../../model/constants'
import { BudgetGridComponent } from '../budget-grid/budget-grid.component';

@Component({
  selector: 'app-budget-home',
  templateUrl: './budget-home.component.html',
  styleUrls: ['./budget-home.component.css']
})
export class BudgetHomeComponent implements OnInit {

  @ViewChild(BudgetGridComponent) budgetGrid!: BudgetGridComponent;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  uploadTransactions() {
    const modalRef = this.modalService.open(UploadTransactionsComponent)
    modalRef.closed.subscribe(message => {
      if (message === SUBMIT) {
        console.log("Update called")
        this.budgetGrid.update()
      }
    })
  }
}
