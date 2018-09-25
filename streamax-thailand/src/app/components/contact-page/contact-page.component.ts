import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor(private seo: SeoService, public lang: LangService) { }

  ngOnInit() {
    this.seo.import({title: "Contact Us"});
  }

}
