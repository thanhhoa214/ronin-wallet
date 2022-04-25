import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendComponent } from './send.component';
import { NzSharedModule } from '../../../base/ng-zorro-antd/shared.module';
import { RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencySelectModule } from '../../ui/currency-select/currency-select.module';

const nzModules = [NzFormModule, NzInputModule];

@NgModule({
  declarations: [SendComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzSharedModule,
    RouterModule.forChild([{ path: '', component: SendComponent }]),
    CurrencySelectModule,
    nzModules,
  ],
})
export class SendModule {}
