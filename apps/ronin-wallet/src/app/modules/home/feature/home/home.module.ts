import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NzSharedModule } from '../../../base/ng-zorro-antd/shared.module';
import { CreditCardModule } from '../../ui/credit-card/credit-card.module';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

const nzModules = [NzSkeletonModule];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    NzSharedModule,
    CreditCardModule,
    nzModules,
  ],
})
export class HomeModule {}
