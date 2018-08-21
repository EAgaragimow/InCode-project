import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as prodActions from '../../store/actions/prod.action';
import * as reducers from '../../store/reducers/prod.reducer';
import * as productSelectors from '../../store/selectors/prod.selectors';
import {Product} from '../../shared/models/product.model';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.css']
})
export class ShowPageComponent implements OnInit {

  prods$: Observable<Product[]>;
  errorLoad$: Observable<boolean>;

  constructor(private store: Store<reducers.State>) {
    this.prods$ = store.select(productSelectors.getAllProducts);
    this.errorLoad$ = store.select(reducers.getLoadError);
  }

  ngOnInit() {
    this.store.dispatch(new prodActions.LoadingProducts());
  }

}
