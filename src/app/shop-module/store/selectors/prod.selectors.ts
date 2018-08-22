import {createSelector} from '@ngrx/store';
import {getStateOfProd} from '../reducers/index';

const getProds = createSelector(getStateOfProd, (state) => state.products);
const getProdsIds = createSelector(getStateOfProd, (state) => state.ids);
const getProdsIsLoading = createSelector(getStateOfProd,  (state) => state.loading);
const getProdsIsLoadError = createSelector(getStateOfProd,  (state) => state.loadError);

export const getAllProducts = createSelector(getStateOfProd, (state) => {
  return state.ids.map(id => state.products[id]);
});

export const getProdsLoadError = createSelector(getProdsIsLoadError, isError => isError);
