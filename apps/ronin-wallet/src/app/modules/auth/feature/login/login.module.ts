import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSharedModule } from '../../../base/ng-zorro-antd/shared.module';
import { AuthDataAccessModule } from '../../data-access';

const nzModules = [NzInputModule, NzFormModule];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
    nzModules,
    NzSharedModule,
    AuthDataAccessModule,
  ],
})
export class LoginModule {}
