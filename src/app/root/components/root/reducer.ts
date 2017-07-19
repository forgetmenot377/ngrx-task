import {ActionReducer, Action} from '@ngrx/store';

export const counter: ActionReducer<number> = (state = 0, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

