import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { ApiCallsService } from '../../services/api-calls.service';
import { IProduct, I_Items } from '../../models/product';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: I_Items;

  constructor(private route: ActivatedRoute, private service: ApiCallsService, private seo: SeoService, public lang: LangService) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe((data: any) => {
        this.service.getProduct(data.params.url)
          .subscribe((res: IProduct) => {
            console.log(res);
            
            this.product = res.Item;
          });
      });
  }

}
