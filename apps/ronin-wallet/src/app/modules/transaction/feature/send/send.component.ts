import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { User, UserCurrency } from '@ronin-wallet/types';
import { NzModalService } from 'ng-zorro-antd/modal';
import { takeUntil, filter } from 'rxjs';
import { DestroyService } from '../../../../util/services/destroy.service';
import { AuthState } from '../../../auth/data-access';
import { CurrencySelectComponent } from '../../ui/currency-select/currency-select.component';

@Component({
  selector: 'ronin-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss'],
  providers: [DestroyService],
})
export class SendComponent implements OnInit {
  form = this.fb.group({
    to: ['', Validators.required],
    currency: ['', Validators.required],
    amount: [0, [Validators.required, Validators.min(0)]],
  });
  user?: User;

  constructor(
    private fb: FormBuilder,
    private store: Store,
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
        this.user = user;

        if (user)
          this.form.patchValue({
            from: user.walletAddress,
            currency: user.currencies[0].currency.code,
          });
      });
  }

  onOpenCurrencySelect() {
    this.modalService
      .create<CurrencySelectComponent, UserCurrency>({
        nzContent: CurrencySelectComponent,
        nzComponentParams: {
          selectedCurrencyCode: this.form.value.currency,
        },
        nzFooter: null,
        nzWidth: '336px',
        nzBodyStyle: {
          padding: '0',
        },
      })
      .afterClose.pipe(
        filter((currency) => !!currency),
        filter((c) => this.form.get('currency')?.value !== c?.currency.code)
      )
      .subscribe((currency) => {
        this.form.get('currency')?.patchValue(currency.currency.code);
      });
  }
}
