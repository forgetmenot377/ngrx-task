import { Component } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: 'root.component.html',
  styleUrls: ['root.component.scss']
})
export class RootComponent {
  public counter$: Observable<number>;

  constructor(
    private store: Store<number>
  ) {
    this.counter$ = this.store.select('counter');
  }

  public increment() {
    this.store.dispatch({type: 'INCREMENT'});
  }

  public decrement() {
    this.store.dispatch({type: 'DECREMENT'});
  }
}
