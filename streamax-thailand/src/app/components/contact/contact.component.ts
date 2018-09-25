import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailsService } from '../../services/emails.service';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  message: string;
  error: string;

  constructor(private fb: FormBuilder, private service: EmailsService, public lang: LangService) {
    this.form = fb.group({
      'name': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'subject': [null, Validators.required],
      'message': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.form.value);
    this.service.sendEmail(this.form.value)
      .subscribe(res => {
        console.log(res);
        if (res === true) {
          this.form.reset();
          this.message = "Successfully Sent!"
        }
        else {
          this.error = "Something when wrong! Call us or Email us instead.";
        }
      });
  }

}
