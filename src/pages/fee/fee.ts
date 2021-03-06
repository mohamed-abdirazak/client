import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../providers/http-service/http-service';
import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * Generated class for the FeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fee',
  templateUrl: 'fee.html',
})
export class FeePage {
  fees:any [];
  public stdId;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.stdId = this.navParams.data;
    this.getStdfee(this.stdId);
  }
  getStdfee(stdId){
    const url = 'http://localhost:3000/fee';
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post(url, {stdId}, { headers: headers })
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error.json()))
    .subscribe(
    data => {
    console.log(data);
    this.fees = data;
    
    },
    error => console.error(error)
    );
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeePage');
  }

}
