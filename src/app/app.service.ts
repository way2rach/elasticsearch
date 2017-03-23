import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ItemService {

  private itemUrl = 'http://search-fittery-challenge-pv7vc3ugoko5hngpgxdh4szuqm.us-east-1.es.amazonaws.com/items/_search';  // URL to web API
  constructor (private http: Http) {}

  getItems() {
    return this.http.get(this.itemUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
