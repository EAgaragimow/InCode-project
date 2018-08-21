import * as reducersOfProd from './prod.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface State {
  products: reducersOfProd.State;
}

export const reducers: ActionReducerMap<State> = {
  products: reducersOfProd.reducer
};

export const getStateOfProd = createFeatureSelector<reducersOfProd.State>('products');
