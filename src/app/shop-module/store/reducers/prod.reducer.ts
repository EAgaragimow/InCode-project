import {Product} from '../../../shared/models/product.model';
import {LOADING_PRODUCT, LOADED_PRODUCT_OK, LOADED_PRODUCT_FALSE} from '../actions/prod.action';

export interface State {
  ids: number[];
  products: {[id: number]: Product};
  loading: boolean;
  loadError: boolean;
}

const initialState = {
  ids: [],
  products: {},
  loading: false,
  loadError: false
};

export function reducer(state = initialState, action) {
  switch (action.type) {

    case LOADED_PRODUCT_OK:
      const data = action.payload;
      const ids = [];
      const products = {};
      data.forEach(el => {
        ids.push(el.id);
        products[el.id] = el;
      });

      return {
        ...state,
        ids,
        products,
        loading: false
      };

    case LOADING_PRODUCT: return {
        ...state,
        loading: true,
        loadError: false
      };

    case LOADED_PRODUCT_FALSE:
      console.log('error!!!: ', action.payload);

      return {
        ...state,
        loading: false,
        loadError: true
      };

    default: return state;
  }
}

export const getProds = (state: State) => state.products;
export const getIds = (state: State) => state.ids;
export const getLoading = (state: State) => state.loading;
export const getLoadError = (state: State) => state.loadError;
