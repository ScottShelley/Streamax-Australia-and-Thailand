import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuoteMeService {

  constructor(private http: HttpClient) { }

  post(data: any) {
    return this.http.post("https://95jpowe0c7.execute-api.ap-southeast-2.amazonaws.com/Prod/quote-me", data);
  }

}
