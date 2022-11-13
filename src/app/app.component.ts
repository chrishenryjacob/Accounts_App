import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  accountsDetails: any[] = [];

  ngOnInit(): void {
    this.getallAccounts();
  }

  onFormSubmit(val: boolean) {
    if (val) {
      this.getallAccounts();
    }
  }

  getallAccounts() {
    const accountsData = localStorage.getItem('AccountsDetails');
    this.accountsDetails = accountsData ? JSON.parse(accountsData) : [];
  }

}
