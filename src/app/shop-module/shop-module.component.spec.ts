import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopModuleComponent } from './shop-module.component';

describe('ShopModuleComponent', () => {
  let component: ShopModuleComponent;
  let fixture: ComponentFixture<ShopModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
