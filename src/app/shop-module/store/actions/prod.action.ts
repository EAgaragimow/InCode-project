import {Action} from '@ngrx/store';
import {Product} from '../../../shared/models/product.model';

export const LOADING_PRODUCT = '[PRODUCT] Loading';
export const LOADED_PRODUCT_OK = '[PRODUCT] Load success';
export const LOADED_PRODUCT_FALSE = '[PRODUCT] Load false';

export class LoadingProducts implements Action {
  readonly type = LOADING_PRODUCT;
}

export class LoadedProducts implements Action {
  readonly type = LOADED_PRODUCT_OK;
  constructor(public payload: Product[]) {}
}

export class FalseLoadedProducts implements Action {
  readonly type = LOADED_PRODUCT_FALSE;
  constructor(public payload: string) {}
}

export type Actions = LoadingProducts | LoadedProducts | FalseLoadedProducts;
