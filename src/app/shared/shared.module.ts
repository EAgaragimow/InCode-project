import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProdService} from './services/prod.service';
import {MainNavComponent} from './components/main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';

@NgModule({
  declarations: [
    MainNavComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MainNavComponent
  ],
  providers: [
    ProdService
  ]
})
export class SharedModule {
}
