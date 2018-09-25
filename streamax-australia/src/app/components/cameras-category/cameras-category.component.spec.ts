import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamerasCategoryComponent } from './cameras-category.component';

describe('CamerasCategoryComponent', () => {
  let component: CamerasCategoryComponent;
  let fixture: ComponentFixture<CamerasCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamerasCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamerasCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
