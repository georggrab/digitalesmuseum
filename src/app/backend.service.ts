import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

export class Image {
  constructor(public url:string,
    public source: string, public caption: string,
    public width: number, public height: number){}
}
export class Data {
  constructor(public button_text : string, public long_text: string, public short_text : string){}
}
export class Chip {
  constructor(public letter: string, public text: string){}
}
export class Person {
  constructor(public id: number,
    public firstname: string,
    public lastname: string,
    public caption: string,
    public imageTiles: Array<Image>,
    public dataTiles: Array<Data>,
    public portrait: Image,
    public chips: Array<Chip>)
      {}
}


@Injectable()
export class BackendService {
  private api = 'http://it-dmuseum3.dhbw-stuttgart.de:443/';

  constructor(private http: Http) { }

  getPersons() : Observable<Array<Person>> {
      let endpoint = "person";
      return this.http.get(this.api + endpoint)
        .map((res: Response) => res.json().persons)
        .catch((error:any) => Observable.throw(error.json().message || 'Server error'));
  }

}
