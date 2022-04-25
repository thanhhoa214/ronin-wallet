import { NgModule } from '@angular/core';
import { RoninCurrencyPipe } from './currency.pipe';

@NgModule({
  declarations: [RoninCurrencyPipe],
  exports: [RoninCurrencyPipe],
})
export class CurrencyPipeModule {}
