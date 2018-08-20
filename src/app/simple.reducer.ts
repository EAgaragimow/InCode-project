import {Action} from '@ngrx/store';

export function simpleReucer(state: string = 'Hello, world!', action: Action) {
  switch(action.type) {
    case 'SPANISH': return state = 'Hola Mundo';
    case 'FRENCH': return state = 'Bonjour le monde';
    default: return state;
  }
}
