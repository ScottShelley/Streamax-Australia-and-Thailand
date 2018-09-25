import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamoDbService } from '../../services/dynamo-db.service';
import { SeoService } from '../../services/seo.service';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-cameras-category',
  templateUrl: './cameras-category.component.html',
  styleUrls: ['./cameras-category.component.css']
})
export class CamerasCategoryComponent implements OnInit {
  category: string;
  products: IProduct;

  constructor(private route: ActivatedRoute, private service: DynamoDbService, private seo: SeoService) {}

  ngOnInit() {
    this.route.paramMap
      .subscribe((data: any) => {
        this.category = data.params.category;
        this.seo.import({title: "Cameras " + this.category.toUpperCase()});
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
              S: data.params.category
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
        
      });
    
  }

}
