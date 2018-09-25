import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamoDbService } from '../../services/dynamo-db.service';
import { SeoService } from '../../services/seo.service';
import { ApiCallsService } from '../../services/api-calls.service';
import { ISolution, I_Items } from '../../models/solution';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-solution-page',
  templateUrl: './solution-page.component.html',
  styleUrls: ['./solution-page.component.css']
})
export class SolutionPageComponent implements OnInit {
  solution: I_Items;

  constructor(private route: ActivatedRoute, private service: ApiCallsService, private seo: SeoService, public lang: LangService) {}

  ngOnInit() {
    this.route.paramMap
      .subscribe((data: any) => {
        this.service.getSolution(data.params.url)
          .subscribe((res: ISolution) => {
            console.log(res);
            
            this.solution = res.Item;
          });
      });
  }

}
