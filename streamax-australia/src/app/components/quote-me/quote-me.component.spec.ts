import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteMeComponent } from './quote-me.component';

describe('QuoteMeComponent', () => {
  let component: QuoteMeComponent;
  let fixture: ComponentFixture<QuoteMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
