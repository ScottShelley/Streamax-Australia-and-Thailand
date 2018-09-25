import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailsService } from '../../services/emails.service';
import { ToastyService, ToastOptions } from 'ngx-toasty';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  message: string;
  error: string;

  constructor(private fb: FormBuilder, private service: EmailsService, private toastyService: ToastyService) {
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
          let toastOptions: ToastOptions = {
            title: "Successfully Sent :)",
            msg: "Be in touch with you soon!",
            showClose: true,
            timeout: 5000
          };
          this.toastyService.success(toastOptions);
        }
        else {
          this.error = "Something when wrong! Call us or Email us instead.";
          let toastOptions: ToastOptions = {
            title: "Error :(",
            msg: "Something when wrong! Call us or Email us instead.",
            showClose: true,
            timeout: 5000
          };
          this.toastyService.error(toastOptions);
        }
      });
  }

}
