import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-budget-grid',
  templateUrl: './budget-grid.component.html',
  styleUrls: ['./budget-grid.component.css']
})
export class BudgetGridComponent implements OnInit {

  private monthlyTransactions: any;
  transactionsJson: string | undefined;
  isLoading: boolean = true;
  columnDefs: any[] = [{
    field: "category",
    pinned: "left"
  }];
  rowData: any;

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.listMonthlyTransactions();
  }

  listMonthlyTransactions() {
    this.isLoading = true;
    this.budgetService.listMonthlyTransactions().subscribe(
      data => {
        this.monthlyTransactions = data;
        this.transactionsJson = JSON.stringify(this.monthlyTransactions);
        this.renderGrid();
      },
      err => {
        console.error(err);
        this.isLoading = false;
      },
      () => console.log("Transactions loaded.")
    )
  }

  renderGrid() {
    this.rowData = this.transposeData(this.monthlyTransactions);
    this.organizeHeaders();
    this.isLoading = false;
    this.printData();
  }

  printData() {
    console.log(JSON.stringify(this.rowData))
    console.log("Categories:")
    this.rowData.forEach((rowData: { category: string; }) => {
      console.log(rowData.category + "\n")
    })
    console.log("Avg: ")
    this.rowData.forEach((row: { Average: string; }) => {
      console.log(row.Average + "\n")
    })
  }

  transposeData(data: any[]) {
    let transposedData: any[] = [];
    let keys = Object.keys(data[0])
    for (let i = 3; i < keys.length; i++) {
      transposedData.push({
        category: keys[i]
      });
    }
    data.forEach(monthlyTransactionLog => {
      let values = Object.values(monthlyTransactionLog);
      let type = values[1];
      let month = values[2];
      let headerName: string = this.valueToString(month) + "\n" + this.valueToString(type);
      if (headerName.includes("TEST")) {
        return;
      }
      this.addToHeaders(headerName);
      for (let i = 3; i < values.length; i++) {
        transposedData[i - 3] = {
          ...transposedData[i - 3],
          [headerName]: values[i]
        };
      }
    });
    for (let i = 0; i < transposedData.length; i++) {
      let row = transposedData[i];
      this.columnDefs.forEach(header => {
        if (Object.keys(row).indexOf(header.field) == -1) {
          transposedData[i] = {
            ...row,
            [header.field]: 0
          }
        }
      })
    }
    return transposedData;
  }

  valueToString(value: any): string {
    return JSON.stringify(value).replace('\"', '').replace('\"', '');
  }

  addToHeaders(header: string) {
    this.columnDefs.push({
      field: header,
      valueFormatter: this.currencyFormatter,
      type: 'rightAligned',
      cellStyle: (params: any) => {
        if (header.includes("TRANSACTIONS")) {
          let budgetValue = params.node.data[header.replace("TRANSACTIONS", "BUDGET")];
          if (Math.abs(params.value) > Math.abs(budgetValue)) {
            return {backgroundColor: '#FFB798'}
          } else {
            return {backgroundColor: '#95F7A7'}
          }
        } else {
          return;
        }
      },
    });
  }

  currencyFormatter(params: any) {
    let stringFormat = params.value.toFixed(2);
    if (stringFormat.indexOf('-') != -1 ) {
      stringFormat = stringFormat.replace("-", "- $ ");
    } else {
      stringFormat = '$ ' + stringFormat;
    }
    return stringFormat;
  }

  organizeHeaders() {
    // Order them by date-budget, date-transactions
    this.columnDefs.sort((col1, col2) => {
      if (col1.field == "category") return -1;
      if (col2.field == "category") return 1;
      return col1.field.localeCompare(col2.field);
    })
    this.totalRows();
  }

  totalRows() {
    this.columnDefs.push({
      field: "Average",
      valueFormatter: this.currencyFormatter,
      pinned: "right",
      type: 'rightAligned'
    });
    this.columnDefs.push({
      field: "Total",
      valueFormatter: this.currencyFormatter,
      pinned: "right",
      type: 'rightAligned',
      cellStyle: (params: any) => {
        if (params.value > 0) {
          return {backgroundColor: '#95F7A7'}
        } else {
          return {backgroundColor: '#FFB798'}
        }
      }
    });
    // Sum / fill in total & avg columns
    for (let i = 0; i < this.rowData.length; i++) {
      let row = this.rowData[i];
      let total: number = 0;
      let numTransactions: number = 0;
      let transactionsTotal: number = 0;
      Object.entries(row).forEach(([key, value]) => {
        if (key == "category") return;
        if (key.includes("TRANSACTION")) {
          numTransactions++;
          transactionsTotal += Number.parseFloat(JSON.stringify(value));
        }
        total += Number.parseFloat(JSON.stringify(value));
      });
      let avg = transactionsTotal / numTransactions;
      this.rowData[i] = {
        ...row,
        "Average": avg,
        "Total": total
      }
    }
  }
}