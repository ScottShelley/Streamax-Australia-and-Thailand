import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamoDbService } from '../../services/dynamo-db.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string;
  products: any = {
    Items: []
  };

  constructor(private route: ActivatedRoute, private service: DynamoDbService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((data: any) => {
        this.search = data.params.value;
        let params = {
          ExpressionAttributeNames: {
            "#N": "Name", 
            "#C": "Category",
            "#U": "URL",
            "#I": "ImgUrl",
           },
          ExpressionAttributeValues: {
             ":v2": {
               S: data.params.value
             }
           }, 
           FilterExpression: "contains(#N, :v2)",
           ProjectionExpression: "#N, #C, #U, #I",
           TableName: "Products"
        }
        this.service.getDynamoDB().scan(params, (err, data) => {
          console.log(err);
          console.log(data.Items);
          this.products = data;
        });
      });
  }

}
