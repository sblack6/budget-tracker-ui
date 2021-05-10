import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BudgetService } from 'src/app/services/budget.service';
import { TRANSACTIONS, BUDGET, SUBMIT } from '../../model/constants'
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-upload-transactions',
  templateUrl: './upload-transactions.component.html',
  styleUrls: ['./upload-transactions.component.css']
})
export class UploadTransactionsComponent implements OnInit {

  date = "2021-05"
  source = "personal-capital"
  inProgress: boolean = false;
  file: any = null;

  constructor(public activeModal: NgbActiveModal, private budgetService: BudgetService) { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  submit() {
    this.budgetService.deleteIfExists(TRANSACTIONS, this.date).pipe(
      mergeMap(result => this.budgetService.deleteIfExists(BUDGET, this.date).pipe(
        mergeMap(result => this.budgetService.uploadTransactions(this.inProgress, this.source, this.file).pipe(
          mergeMap(result => this.budgetService.newBudgetFromDefault(this.date, this.inProgress))))
        )
      )
    ).subscribe(
      result => {
        console.log("Delete old entries, upload transactions, create new budget complete. " + JSON.stringify(result, null, 2))
      }
    )

    this.activeModal.close(SUBMIT)
  }

}
