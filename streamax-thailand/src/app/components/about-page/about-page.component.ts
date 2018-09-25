import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(private seo: SeoService, public lang: LangService) { }

  ngOnInit() {
    this.seo.import({title: "About Us"});
  }

}
