import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendComponent } from './send.component';
import { NzSharedModule } from '../../../base/ng-zorro-antd/shared.module';
import { RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencySelectModule } from '../../ui/currency-select/currency-select.module';
import { AddressTruncatePipeModule } from '../../util/pipes/address-truncate/address-truncate.module';
import { NgxMaskModule } from 'ngx-mask';
import { TransactionDataAccessModule } from '../../data-access';

const nzModules = [NzFormModule, NzInputModule, NzInputNumberModule];

@NgModule({
  declarations: [SendComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzSharedModule,
    NgxMaskModule,
    RouterModule.forChild([{ path: '', component: SendComponent }]),
    CurrencySelectModule,
    AddressTruncatePipeModule,
    TransactionDataAccessModule,
    nzModules,
  ],
})
export class SendModule {}
