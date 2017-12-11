import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../providers/http-service/http-service';
import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {
  attendances:any [];
  public stdId;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.stdId = this.navParams.data;
    this.getStdAttendance(this.stdId);
  }
  getStdAttendance(stdId){
    const url = 'http://localhost:3000/attendance';
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post(url, {stdId}, { headers: headers })
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error.json()))
    .subscribe(
    data => {
    console.log(data);
    this.attendances = data;
    
    },
    error => console.error(error)
    );
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
  }

}
