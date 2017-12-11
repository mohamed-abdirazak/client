import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { HttpService } from '../../providers/http-service/http-service';
import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UserdetailPage } from '../../pages/userdetail/userdetail';
import { LoginPage } from '../login/login';
@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {
users:any [];
numofusers:number;

constructor(public app: App,public navCtrl: NavController, public http:Http) {
this.getUsers();
}
logout(){
  this.navCtrl.push(LoginPage);
}
getUsers(){
  const url = 'http://localhost:3000/students';
  const headers = new Headers({ 'Content-Type': 'application/json' });
  this.http.post(url, {}, { headers: headers })
  .map((response: Response) => response.json())
  .catch((error: Response) => Observable.throw(error.json()))
  .subscribe(
  data => {
  console.log(data);
  this.users = data;
  this.numofusers = this.users.length;
  },
  error => console.error(error)
  );
  }
  userDetail(user){
  this.navCtrl.push(UserdetailPage, user);
  }
}  