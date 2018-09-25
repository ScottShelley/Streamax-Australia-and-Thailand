import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPartnersPageComponent } from './our-partners-page.component';

describe('OurPartnersPageComponent', () => {
  let component: OurPartnersPageComponent;
  let fixture: ComponentFixture<OurPartnersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurPartnersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurPartnersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
