import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';

const primeModules = [PasswordModule];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
    primeModules,
  ],
})
export class LoginModule {}
