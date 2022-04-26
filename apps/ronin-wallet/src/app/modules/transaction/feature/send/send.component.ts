import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { User, UserCurrency } from '@ronin-wallet/types';
import { NotificationDialogComponent } from '../../../../ui/notification-dialog/notification-dialog.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { takeUntil, filter } from 'rxjs';
import { DestroyService } from '../../../../util/services/destroy.service';
import { AuthState } from '../../../auth/data-access';
import { Send } from '../../data-access';
import { CurrencySelectComponent } from '../../ui/currency-select/currency-select.component';
import { formatNumber } from '@angular/common';

@Component({
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss'],
  providers: [DestroyService],
})
export class SendComponent implements OnInit {
  form = this.fb.group({
    to: ['', [Validators.required, Validators.minLength(16)]],
    amount: [0],
  });
  user?: User;

  get currency(): UserCurrency | undefined {
    return this._currency;
  }
  set currency(value: UserCurrency | undefined) {
    if (value) {
      this._currency = value;
      this.form
        .get('amount')
        ?.setValidators([
          Validators.required,
          Validators.min(0),
          Validators.max(value.balance),
        ]);
    }
  }
  private _currency?: UserCurrency;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private actions: Actions,
    private modalService: NzModalService,
    private destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.store
      .select(AuthState.user)
      .pipe(
        filter((user) => !!user),
        takeUntil(this.destroy$)
      )
      .subscribe((user) => {
        if (user) {
          this.user = user;
          this.currency = user.currencies[0];

          this.form.patchValue({
            from: user.walletAddress,
          });
        }
      });

    this.actions
      .pipe(ofActionSuccessful(Send))
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.modalService.create({
          nzContent: NotificationDialogComponent,
          nzComponentParams: {
            title: 'Successfully sent',
            message: `Your <strong>${formatNumber(
              this.form.get('amount')?.value || 0,
              'en-US',
              '1.0-2'
            )} EUR</strong> has been sent!<br/>Thank you for using our service`,
          },
          nzWidth: '336px',
          nzFooter: null,
          nzBodyStyle: { padding: '24px 20px 22px', borderRadius: '1rem' },
        });
      });
  }

  onOpenCurrencySelect() {
    this.modalService
      .create<CurrencySelectComponent, UserCurrency>({
        nzContent: CurrencySelectComponent,
        nzComponentParams: {
          selectedCurrencyCode: this.currency?.currency.code,
        },
        nzFooter: null,
        nzWidth: '336px',
        nzBodyStyle: { padding: '0' },
      })
      .afterClose.pipe(
        filter((c) => !!c),
        filter((c) => this.currency?.currency.code !== c?.currency.code)
      )
      .subscribe((currency) => {
        this.currency = currency;
      });
  }

  onSubmit() {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
    if (!this.form.valid || !this.currency) return;
    const { to, amount } = this.form.value;

    this.store.dispatch(
      new Send({
        receiverAddress: to,
        amount,
        currencyCode: this.currency.currency.code,
      })
    );
  }
}
