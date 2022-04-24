import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * Remember to add `DestroyService` to your component `providers` as below
 * @example
 * ```
 * @Component({ selector: 'app-project-layout', ..., providers: [DestroyService]})
 * ```
 */
@Injectable()
export class DestroyService extends Subject<void> implements OnDestroy {
  ngOnDestroy() {
    this.next();
    this.complete();
  }
}
