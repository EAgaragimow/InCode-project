import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProdService} from './services/prod.service';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    ProdService
  ]
})
export class SharedModule {
}
