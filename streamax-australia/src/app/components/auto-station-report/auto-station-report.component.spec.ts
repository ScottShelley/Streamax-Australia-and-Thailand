import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoStationReportComponent } from './auto-station-report.component';

describe('AutoStationReportComponent', () => {
  let component: AutoStationReportComponent;
  let fixture: ComponentFixture<AutoStationReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoStationReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoStationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
