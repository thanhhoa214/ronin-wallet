import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { CoreState } from './state';

@NgModule({
  imports: [NgxsModule.forFeature([CoreState])],
})
export class CoreDataAccessModule {}
