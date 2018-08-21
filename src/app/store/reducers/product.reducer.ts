import {Action} from '@ngrx/store';
import {initialState} from './product';

export function productReducer(state = initialState, action: prodAction.Action) {
  switch (action.type) {
    case 'load': return state;
    case 'stop': return;
    default: return state;
  }
}
