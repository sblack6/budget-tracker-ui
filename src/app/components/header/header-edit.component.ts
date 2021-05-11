import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IHeaderParams } from 'ag-grid-community';

@Component({
  selector: 'app-header-edit',
  templateUrl: './header-edit.component.html',
  styleUrls: ['./header-edit.component.css']
})
export class HeaderEditComponent implements IHeaderAngularComp {

  type: string = ''
  date: string = ''
  params!: IHeaderParams;

  constructor(private router: Router) { }

  refresh(params: IHeaderParams): boolean {
    this.agInit(params)
    return true
  }
  agInit(params: IHeaderParams): void {
    this.params = params;
    this.date = params.displayName.substring(0,7);
    this.type = params.displayName.substring(8);
  }

  editBudget() {
    this.router.navigate(['/budget/edit', this.type, this.date]);
  }

}
