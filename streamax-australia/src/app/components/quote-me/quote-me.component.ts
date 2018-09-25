import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { QuoteMeService } from '../../services/quote-me.service';
import {ToastyService, ToastOptions} from 'ngx-toasty';


@Component({
  selector: 'app-quote-me',
  templateUrl: './quote-me.component.html',
  styleUrls: ['./quote-me.component.css']
})
export class QuoteMeComponent implements OnInit {
  form: FormGroup;
  vehicleItems: any[] = [];

  constructor(private fb: FormBuilder, private service: QuoteMeService, private toastyService: ToastyService) {}

  ngOnInit() {
    this.form = this.fb.group({
      'name': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'company': [null],
      'phoneNumber': [null, Validators.required],
      'option': [null, Validators.required],
      'camerasNumber': [null, Validators.required],
      'recording': [null, Validators.required],
      'resolution': [null, Validators.required],
      'footage': [null, Validators.required],
      'furtherInfor': [null],
      'budget': [null],
      'vehicles': this.fb.array([ this.formVehicle() ])
    });
  }

  formVehicle(): FormGroup {
    return this.fb.group({
      'make': [null, Validators.required],
      'model': [null, Validators.required],
      'number': [null, Validators.required]
    });
  }

  addToVehicle() : void {
    this.vehicleItems = this.form.get('vehicles') as any;
    this.vehicleItems.push(this.formVehicle());    
  }

  removeVehicle(index: number) : void {
    console.log(index);
    const control = <FormArray>this.form.controls['vehicles'];
    control.removeAt(index);
  }
  
  submit() {
    console.log(this.form.value);
    this.service.post(this.form.value)
      .subscribe(res => {
        if (res === true) {
          this.form.reset();
          let toastOptions: ToastOptions = {
            title: "Successfully Sent :)",
            msg: "Be in touch with you soon!",
            showClose: true,
            timeout: 5000
          };
          this.toastyService.success(toastOptions);
        } else {
          console.log(res);
        }
        
      });
  }
}
