import { Component, OnInit } from '@angular/core';
import { DynamoDbService } from '../../services/dynamo-db.service';
import { SeoService } from '../../services/seo.service';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-mdvr',
  templateUrl: './mdvr.component.html',
  styleUrls: ['./mdvr.component.css']
})
export class MdvrComponent implements OnInit {
  products: IProduct;

  constructor(private service: DynamoDbService, private seo: SeoService) { }

  ngOnInit() {
    this.seo.import({title: "MDVR"});
    let params = {
      ExpressionAttributeNames: {
        "#N": "Name", 
        "#C": "Category",
        "#U": "URL",
        "#I": "ImgUrl",
        "#D": "Description"
       },
      ExpressionAttributeValues: {
        ":v1": {
          S: "mdvr"
         }
       }, 
       FilterExpression: "Category = :v1",
       ProjectionExpression: "#N, #C, #U, #I, #D",
       TableName: "Products"
    }
    this.service.getDynamoDB().scan(params, (err, data: any) => {
      console.log(err);
      console.log(data);
      this.products = data;
    });
  }

}
