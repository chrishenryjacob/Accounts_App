import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { AccountsFormComponent } from './accounts-form/accounts-form.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AccountsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzPageHeaderModule,
    NzCardModule,
    NzInputModule,
    NzGridModule,
    NzUploadModule,
    NzMessageModule,
    NzIconModule,
    NzButtonModule,
    NzDatePickerModule,
    NzDropDownModule,
    NzPopconfirmModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
