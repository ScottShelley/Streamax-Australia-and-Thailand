import { Component, OnInit } from '@angular/core';
import { DynamoDbService } from '../../services/dynamo-db.service';
import { SeoService } from '../../services/seo.service';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  products: IProduct;

  constructor(private service: DynamoDbService, private seo: SeoService) { }

  ngOnInit() {
    this.seo.import({title: "Accessories"});
    let params = {
      ExpressionAttributeNames: {
        "#N": "Name", 
        "#C": "Category",
        "#U": "URL",
        "#I": "ImgUrl",
        "#H": "HTML",
        "#D": "Description"
       },
      ExpressionAttributeValues: {
        ":v1": {
          S: 'accessories'
         }
       }, 
       FilterExpression: "Category = :v1",
       ProjectionExpression: "#N, #C, #U, #I, #H, #D",
       TableName: "Products"
    }
    this.service.getDynamoDB().scan(params, (err, data: any) => {
      console.log(err);
      console.log(data);
      this.products = data;
    });
  }

}
