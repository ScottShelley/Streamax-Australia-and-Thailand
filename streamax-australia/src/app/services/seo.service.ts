import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ISeo } from '../models/seo.model';

@Injectable()
export class SeoService {

  constructor(private meta: Meta, private title: Title) { }

  import(config: ISeo) {
    this.title.setTitle(`${config.title} | Streamax Australia`)
  }
}
