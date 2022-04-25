import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencySelectComponent } from './currency-select.component';
import { CurrencyItemModule } from '../../../../ui/currency-item/currency-item.module';

@NgModule({
  declarations: [CurrencySelectComponent],
  imports: [CommonModule, CurrencyItemModule],
})
export class CurrencySelectModule {}
