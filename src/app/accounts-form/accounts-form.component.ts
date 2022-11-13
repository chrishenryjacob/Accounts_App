import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-accounts-form',
  templateUrl: './accounts-form.component.html',
  styleUrls: ['./accounts-form.component.scss']
})
export class AccountsFormComponent implements OnInit {

  @Output() submitEvent = new EventEmitter<boolean>();

  accountsForm!: FormGroup;
  date = new (Date);
  descriptionList: string[] = [];
  index = 0;

  constructor(private fb: FormBuilder, private msg: NzMessageService) { }

  ngOnInit(): void {
    this.accountsFormInit();
    this.getDescriptionList();
  }

  getDescriptionList() {
    const descriptionData = localStorage.getItem('DescriptionDetails');
    this.descriptionList = descriptionData ? JSON.parse(descriptionData) : [];
    this.index = this.descriptionList.length;
  }

  accountsFormInit() {
    this.accountsForm = this.fb.group({
      itemName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      type: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      paymentType: ['', [Validators.required]],
      date: ['']
    });
  }

  addDescription(input: HTMLInputElement): void {
    const value = input.value;
    if (this.descriptionList.indexOf(value) === -1) {
      this.descriptionList = [...this.descriptionList, input.value || `New item ${this.index++}`];
      localStorage.setItem('DescriptionDetails', JSON.stringify(this.descriptionList));
    }
  }

  submitForm() {
    const accountsData = localStorage.getItem('AccountsDetails');
    let formData = accountsData ? JSON.parse(accountsData) : [];

    this.accountsForm.value.date = this.date.toUTCString();
    formData.push(this.accountsForm.value);
    localStorage.setItem('AccountsDetails', JSON.stringify(formData));

    this.msg.create('success', `${this.accountsForm.value.itemName} added`);
    this.submitEvent.emit(true);
    this.resetForm();
  }

  resetForm() {
    this.accountsForm.reset();
  }
}
