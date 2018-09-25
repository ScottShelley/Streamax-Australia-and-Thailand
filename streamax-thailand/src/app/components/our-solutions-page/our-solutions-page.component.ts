import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { ApiCallsService } from '../../services/api-calls.service';
import { ISolutions, I_Items } from '../../models/solution';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-our-solutions-page',
  templateUrl: './our-solutions-page.component.html',
  styleUrls: ['./our-solutions-page.component.css']
})
export class OurSolutionsPageComponent implements OnInit {

  constructor(public service: ApiCallsService, private seo: SeoService, public lang: LangService) { }

  ngOnInit() {
    this.seo.import({title: "Solutions"});
  }
}
