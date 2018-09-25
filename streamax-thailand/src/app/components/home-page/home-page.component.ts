import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { LangService } from '../../services/lang.service';
import { ApiCallsService } from '../../services/api-calls.service';
import { ISolutions, I_Items } from '../../models/solution';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public service: ApiCallsService, private seo: SeoService, public lang: LangService) { }

  ngOnInit() {
    this.seo.import({title: "Home"})
  }

}
