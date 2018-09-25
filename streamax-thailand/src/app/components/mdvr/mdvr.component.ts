import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { IProducts } from '../../models/product';
import { ApiCallsService } from '../../services/api-calls.service';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-mdvr',
  templateUrl: './mdvr.component.html',
  styleUrls: ['./mdvr.component.css']
})
export class MdvrComponent implements OnInit {
  products: IProducts;

  constructor(private service: ApiCallsService, private seo: SeoService, public lang: LangService) { }

  ngOnInit() {
    this.seo.import({title: "MDVR"});
    this.service.getProducts("mdvr")
      .subscribe((res: IProducts) => {
        this.products = res;
      });
  }

}
