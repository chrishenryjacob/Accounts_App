import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {

  @Input() dataSource: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
