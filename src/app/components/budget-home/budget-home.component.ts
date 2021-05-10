import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-budget-home',
  templateUrl: './budget-home.component.html',
  styleUrls: ['./budget-home.component.css']
})
export class BudgetHomeComponent implements OnInit {


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  // User Interaction
  uploadTransactions() {
    console.log("Clicked.")
    // this.modalService.open(my modal component here)
  }
}
