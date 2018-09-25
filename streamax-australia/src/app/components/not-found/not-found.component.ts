import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  url: string = "";
  form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.url = this.router.url;
    this.form = this.fb.group({
      'url': [this.url, Validators.required]
    });
  }

  submit() {
    console.log(this.form.value.url);
    this.router.navigateByUrl(`${this.form.value.url}`);
  }

}
