import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISolutions, I_Items } from '../models/solution';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Methods':  'GET,OPTIONS',
    'Access-Control-Allow-Headers':  'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
    'Access-Control-Allow-Origin':  '*'
  })
};


@Injectable()
export class ApiCallsService {
  public solutions: I_Items[] = [];

  constructor(private http: HttpClient) {
    this.getSolutions()
      .subscribe((res: ISolutions) => {
      console.log(res);
      this.solutions = res.Items.reverse();
    });
  }

  getSolutions() {
    return this.http.get('https://jhe1hrw2t7.execute-api.ap-southeast-1.amazonaws.com/api/get-solutions');
  }

  getSolution(url: string) {
    return this.http.get('https://jhe1hrw2t7.execute-api.ap-southeast-1.amazonaws.com/api/get-solutions/' + url);
  }

  getProducts(category: string) {
    return this.http.get('https://jhe1hrw2t7.execute-api.ap-southeast-1.amazonaws.com/api/get-products/?category=' + category);
  }

  getProduct(url: string) {
    return this.http.get('https://jhe1hrw2t7.execute-api.ap-southeast-1.amazonaws.com/api/get-products/' + url);
  }

}
