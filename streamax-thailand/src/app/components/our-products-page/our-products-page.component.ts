import { Component, OnInit } from '@angular/core';
import { DynamoDbService } from '../../services/dynamo-db.service';
import { SeoService } from '../../services/seo.service';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-our-products-page',
  templateUrl: './our-products-page.component.html',
  styleUrls: ['./our-products-page.component.css']
})
export class OurProductsPageComponent implements OnInit {
  products: any[] = [];
  accessories: any[] = [];

  constructor(private service: DynamoDbService, private seo: SeoService, public lang: LangService) { }

  ngOnInit() {
    this.seo.import({title: "Our Products"});
    let params: any = {
      ExpressionAttributeNames: {
        "#N": "Name", 
        "#C": "Category",
        "#U": "URL",
        "#I": "ImgUrl",
       },
      ExpressionAttributeValues: {
        ":v1": {
          S: "mdvr"
         }
       }, 
       FilterExpression: "Category = :v1",
       ProjectionExpression: "#N, #C, #U, #I",
       TableName: "Products",
       Limit: 25
    };
    this.service.getDynamoDB().scan(params, (err, data) => {
      console.log(err);
      console.log(data);
      this.products = data.Items;
    });
    params.ExpressionAttributeValues = {
        ":v1": {
          S: "accessories"
         }
       };
    params.Limit = 12;
    
    this.service.getDynamoDB().scan(params, (err, data) => {
      console.log(err);
      console.log(data);
      this.accessories = data.Items;
    });
  }
}
