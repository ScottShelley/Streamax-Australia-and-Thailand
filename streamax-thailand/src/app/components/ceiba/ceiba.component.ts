import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-ceiba',
  templateUrl: './ceiba.component.html',
  styleUrls: ['./ceiba.component.css']
})
export class CeibaComponent implements OnInit {

  constructor(private seo: SeoService, public lang: LangService) { }

  ngOnInit() {
    this.seo.import({title: "Ceiba 2"});
  }

}
