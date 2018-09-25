import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamoDbService } from '../../services/dynamo-db.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  form: FormGroup;
  solutions: any[] = [];

  constructor(private fb: FormBuilder, private router: Router, private service: DynamoDbService) {
    this.form = fb.group({
      'search': [null, Validators.required]
    });
  }

  ngOnInit() {
    let params = {
      ExpressionAttributeNames: {
        "#N": "Name"
      },
      ProjectionExpression: "#N",
      TableName: 'Solutions'
    };
    this.service.getDynamoDB().scan(params, (err, data) => {
      console.log(err);
      console.log(data);
      this.solutions = data.Items.reverse();
    });
  }

  submit() {
    console.log(this.form.value.search);
    this.router.navigateByUrl(`searchfor/${this.form.value.search}`);
  }

}
