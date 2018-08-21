import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../shared/models/product.model';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {

  @Input() prod: Product;

  constructor() {
  }

  ngOnInit() {
  }

}
