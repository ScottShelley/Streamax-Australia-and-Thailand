import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-n9m-platform',
  templateUrl: './n9m-platform.component.html',
  styleUrls: ['./n9m-platform.component.css']
})
export class N9mPlatformComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.import({title: "N9M Platform Firmware"});
  }

}
