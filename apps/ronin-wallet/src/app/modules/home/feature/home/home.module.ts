import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NzSharedModule } from '../../../base/ng-zorro-antd/shared.module';
import { CreditCardModule } from '../../ui/credit-card/credit-card.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    NzSharedModule,
    CreditCardModule,
  ],
})
export class HomeModule {}
