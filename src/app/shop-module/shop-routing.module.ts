import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ShowPageComponent} from './conteiners/show-page/show-page.component';
import {ShopModuleComponent} from './shop-module.component';

const routes: Routes = [
  {
    path: 'home', component: ShopModuleComponent, children: [
      {path: 'shop', component: ShowPageComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShopRoutingModule {
}
