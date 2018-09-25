import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-auto-station-report',
  templateUrl: './auto-station-report.component.html',
  styleUrls: ['./auto-station-report.component.css']
})
export class AutoStationReportComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.import({title: "Auto Station Report"});
  }

}
