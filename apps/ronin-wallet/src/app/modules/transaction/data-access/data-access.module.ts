import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { TransactionState } from './state';

@NgModule({
  imports: [NgxsModule.forFeature([TransactionState])],
})
export class TransactionDataAccessModule {}
