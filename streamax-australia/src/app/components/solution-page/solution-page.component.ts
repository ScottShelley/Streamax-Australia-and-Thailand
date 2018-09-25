import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamoDbService } from '../../services/dynamo-db.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-solution-page',
  templateUrl: './solution-page.component.html',
  styleUrls: ['./solution-page.component.css']
})
export class SolutionPageComponent implements OnInit {
  solution: any = {
    Description: {S: ""},
    ImgUrl: {S: ""},
    Name: {S: ""}
  }

  constructor(private route: ActivatedRoute, private service: DynamoDbService, private seo: SeoService) {}

  ngOnInit() {
    this.route.paramMap
      .subscribe((data: any) => {
        let params = {
          Key: {
            "Name": {
              S: data.params.name
            }
          },
          TableName: "Solutions"
        };
        this.service.getDynamoDB().getItem(params, (err, data) => {
          console.log(err);
          console.log(data.Item);
          this.solution = data.Item;
          this.seo.import({title: this.solution.Name.S});
        }); 
      });
  }

}
