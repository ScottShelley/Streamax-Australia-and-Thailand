import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { IProducts } from '../../models/product';
import { ApiCallsService } from '../../services/api-calls.service';

@Component({
  selector: 'app-cameras-category',
  templateUrl: './cameras-category.component.html',
  styleUrls: ['./cameras-category.component.css']
})
export class CamerasCategoryComponent implements OnInit {
  category: string;
  products: IProducts;

  constructor(private route: ActivatedRoute, private service: ApiCallsService, private seo: SeoService) {}

  ngOnInit() {
    this.route.paramMap
      .subscribe((data: any) => {
        this.category = data.params.category;
        this.seo.import({title: "Cameras " + this.category.toUpperCase()});
        this.service.getProducts(this.category)
          .subscribe((res: IProducts) => {
            this.products = res;
          });
        
      });
    
  }

}
