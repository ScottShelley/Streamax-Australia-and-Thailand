import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmailsService {

  constructor(private http: HttpClient) { }

  sendEmail(data) {
     return this.http.post("https://jhe1hrw2t7.execute-api.ap-southeast-1.amazonaws.com/api/send-email",  JSON.stringify(data));
  }

}
