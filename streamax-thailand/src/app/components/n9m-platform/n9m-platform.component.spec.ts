import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { N9mPlatformComponent } from './n9m-platform.component';

describe('N9mPlatformComponent', () => {
  let component: N9mPlatformComponent;
  let fixture: ComponentFixture<N9mPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ N9mPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(N9mPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
