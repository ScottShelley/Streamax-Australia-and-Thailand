import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamoDbService } from '../../services/dynamo-db.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  name: string = "";
  product: any;

  constructor(private route: ActivatedRoute, private service: DynamoDbService, private seo: SeoService) {
    this.name = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit() {
    console.log(this.name);
    
    let params = {
      Key: {
        "URL": {
          S: this.name
        }
      },
      TableName: "Products"
    }
    this.service.getDynamoDB().getItem(params, (err, data) => {
      console.log(err);
      console.log(data.Item);
      this.product = data.Item;
      this.seo.import({title: this.product.Name.S});
    })
  }

}
