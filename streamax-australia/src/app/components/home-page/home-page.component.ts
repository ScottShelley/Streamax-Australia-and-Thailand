import { Component, OnInit } from '@angular/core';
import { DynamoDbService } from '../../services/dynamo-db.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  solutions: any[] = [];

  constructor(private service: DynamoDbService, private seo: SeoService) { }

  ngOnInit() {
    this.seo.import({title: "Home"})
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
