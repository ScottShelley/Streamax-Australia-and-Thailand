import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductsPageComponent } from './our-products-page.component';

describe('OurProductsPageComponent', () => {
  let component: OurProductsPageComponent;
  let fixture: ComponentFixture<OurProductsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProductsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
