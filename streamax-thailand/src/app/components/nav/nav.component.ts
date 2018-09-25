import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LangService } from '../../services/lang.service';
import { ApiCallsService } from '../../services/api-calls.service';
import { I_Items, ISolutions } from '../../models/solution';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, public service: ApiCallsService, public lang: LangService) {
    this.form = fb.group({
      'search': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.form.value.search);
    this.router.navigateByUrl(`searchfor/${this.form.value.search}`);
  }

  onLangChange(value: string) {
    this.lang.setLang(value);
  }

}
