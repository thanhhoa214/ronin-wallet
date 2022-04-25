import { NgModule } from '@angular/core';
import { RoninAddressTruncatePipe } from './address-truncate.pipe';

@NgModule({
  declarations: [RoninAddressTruncatePipe],
  exports: [RoninAddressTruncatePipe],
})
export class AddressTruncatePipeModule {}
