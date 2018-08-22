import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../../shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() prods$: Observable<Product[]>;

  constructor() { }

  ngOnInit() {
  }

}
