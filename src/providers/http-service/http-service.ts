import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
@Injectable()

export class HttpService {

private host = 'http://localhost:3000';
constructor(private http: Http) { }

httpRequest(url, data) {
const body = JSON.stringify(data);
const reqUrl = this.host + url;
const headers = new Headers({ 'Content-Type': 'application/json' });
return this.http.post(reqUrl, body, { headers: headers })
.map((response: Response) => response.json())
.catch((error: Response) => Observable.throw(error.json()));
}}


