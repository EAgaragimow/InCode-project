import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ShowPageComponent} from './conteiners/show-page/show-page.component';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/reducers/prod.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProdComponent} from './components/prod/prod.component';
import {AppRoutingModule} from './app-routing.module';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffect} from './store/effects/products.effect';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ShowPageComponent,
    ProductListComponent,
    ProdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      products: reducer
    }),
    EffectsModule.forRoot([ProductsEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
