import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdvrComponent } from './mdvr.component';

describe('MdvrComponent', () => {
  let component: MdvrComponent;
  let fixture: ComponentFixture<MdvrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdvrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdvrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
