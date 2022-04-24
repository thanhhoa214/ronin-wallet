import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, ResolveEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface SetupAutoTitleParams {
  prefix?: string;
  postfix?: string;
}

@Injectable({ providedIn: 'root' })
export class AutoTitleService {
  constructor(private title: Title, private router: Router) {}

  setupAutoTitleListener(params: SetupAutoTitleParams = {}) {
    this.router.events
      .pipe(filter((event) => event instanceof ResolveEnd))
      .subscribe((event) => {
        const { data } = getDeepestChildSnapshot(
          (event as ResolveEnd).state.root
        );
        const { prefix = '', postfix = '' } = params;
        const title = data?.['title'];
        if (title) this.title.setTitle(prefix + title + postfix);
      });
  }
}

export const getDeepestChildSnapshot: (
  snapshot: ActivatedRouteSnapshot
) => ActivatedRouteSnapshot = (snapshot) => {
  let deepestChild = snapshot.firstChild;
  while (deepestChild?.firstChild) {
    deepestChild = deepestChild?.firstChild;
  }
  return deepestChild || snapshot;
};
