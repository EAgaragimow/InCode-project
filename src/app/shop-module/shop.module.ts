import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '../../../node_modules/@angular/platform-browser/animations';
import {MatCardModule} from '../../../node_modules/@angular/material/card';
import {MatButtonModule} from '@angular/material';

import {ShopRoutingModule} from './shop-routing.module';

import {ProdComponent} from './components/prod/prod.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ShowPageComponent} from './conteiners/show-page/show-page.component';
import {ShopModuleComponent} from './shop-module.component';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffect} from './store/effects/products.effect';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/reducers/prod.reducer';

@NgModule({
  declarations: [
    ProdComponent,
    ProductListComponent,
    ShowPageComponent,
    ShopModuleComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    ShopRoutingModule,
    EffectsModule.forRoot([ProductsEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    StoreModule.forRoot({
      products: reducer
    })
  ],
  exports: []
})
export class ShopModule {
}
