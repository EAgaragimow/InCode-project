import {Injectable} from '@angular/core';
import {ProdService} from '../../../shared/services/prod.service';
import {Actions, Effect} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {LOADING_PRODUCT, LoadedProducts, FalseLoadedProducts} from '../actions/prod.action';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable()
export class ProductsEffect {
  constructor(
    private prodService: ProdService,
    private actions$: Actions) {
  }

  @Effect()
  products$: Observable<Action> = this.actions$
    .ofType(LOADING_PRODUCT)
    .pipe(
      switchMap(() => {
        return this.prodService.getProducts()
          .pipe(
            map(prods => new LoadedProducts(prods)),
            catchError(err => of(new FalseLoadedProducts(err.message)))
          );
      })
    );


}
