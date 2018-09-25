import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmailsService {

  constructor(private http: HttpClient) { }

  sendEmail(data) {
     return this.http.post("https://co6yqaasw2.execute-api.ap-southeast-2.amazonaws.com/SendEmail/sendemail",  JSON.stringify(data));
  }

}
