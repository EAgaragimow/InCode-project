import {Component, OnInit} from '@angular/core';
import {ProductService} from './shared/services/product.service';
import {Product} from './shared/models/product.model';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

interface AppState {
  product: Product[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  products: Product[] = [];
  product$: Observable<Product[]>;

  constructor(private productService: ProductService,
              private store: Store<AppState>) {
    this.product$ = this.store.select('product');
  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe((prod: Product[]) => {
        this.products = prod;
        this.store['source']['value'] = prod;
      });

    console.log(this.store['source']['value']);
    this.store.dispatch({type: 'load'});
  }
}
