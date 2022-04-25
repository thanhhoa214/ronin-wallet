import { Component } from '@angular/core';
import { AutoTitleService } from './util/services/auto-title.service';

@Component({
  selector: 'ronin-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(autoTitleService: AutoTitleService) {
    autoTitleService.setupAutoTitleListener({ postfix: ' | Ronin' });
  }
}
