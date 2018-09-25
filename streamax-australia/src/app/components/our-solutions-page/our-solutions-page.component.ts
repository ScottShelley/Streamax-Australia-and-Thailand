import { Component, OnInit } from '@angular/core';
import { DynamoDbService } from '../../services/dynamo-db.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-our-solutions-page',
  templateUrl: './our-solutions-page.component.html',
  styleUrls: ['./our-solutions-page.component.css']
})
export class OurSolutionsPageComponent implements OnInit {
  solutions: any[] = [];

  constructor(private service: DynamoDbService, private seo: SeoService) { }

  ngOnInit() {
    this.seo.import({title: "Solutions"});
    let params = {
      TableName: 'Solutions'
    };
    this.service.getDynamoDB().scan(params, (err, data) => {
      console.log(err);
      console.log(data);
      this.solutions = data.Items.reverse();
    });
  }
}
