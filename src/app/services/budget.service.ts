import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application-json'})
};

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient) { }

  listMonthlyTransactions() {
    return this.http.get('/server/api/v1/transactions');
  }

  parseCsv() {
    // /server/api/v1/transactions/parse-csv/personal-capital 
  }
}
