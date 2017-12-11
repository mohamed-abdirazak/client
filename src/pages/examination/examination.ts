import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../providers/http-service/http-service';
import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * Generated class for the ExaminationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-examination',
  templateUrl: 'examination.html',
})
export class ExaminationPage {
  exams:any [];
  public stdId;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {
    this.stdId = this.navParams.data;
    console.log(this.stdId);
    this.getStdExam(this.stdId);
  }
  
  getStdExam(stdId){
    const url = 'http://localhost:3000/exam';
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post(url, {stdId}, { headers: headers })
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error.json()))
    .subscribe(
    data => {
    console.log(data);
    this.exams = data;
    
    },
    error => console.error(error)
    );
    }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ExaminationPage');
  }

}
