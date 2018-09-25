import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeibaComponent } from './ceiba.component';

describe('CeibaComponent', () => {
  let component: CeibaComponent;
  let fixture: ComponentFixture<CeibaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeibaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeibaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
