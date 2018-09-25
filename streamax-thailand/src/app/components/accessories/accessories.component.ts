import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { IProducts } from '../../models/product';
import { ApiCallsService } from '../../services/api-calls.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  products: IProducts;

  constructor(private service: ApiCallsService, private seo: SeoService) { }

  ngOnInit() {
    this.seo.import({title: "Accessories"});
    this.service.getProducts("accessories")
      .subscribe((res: IProducts) => {
        this.products = res;
      });
  }

}
