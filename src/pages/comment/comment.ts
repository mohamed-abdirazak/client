import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { HttpService } from '../../providers/http-service/http-service';
import { FormGroup, FormBuilder, Validators,NgForm } from '@angular/forms';
import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HomePage} from '../home/home';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  public userDetail ={};
  CommentForm: FormGroup;
  createUser = {ID: '', name: '', date: '', phone: '', comment: '' };
  
  comments:any [];
  public stdId;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:  Http,
    public viewCtrl: ViewController,private formBuilder: FormBuilder,private authService: HttpService,
    public toastCtrl: ToastController) {
    this.CommentForm = this.formBuilder.group({
      ID: ['', Validators.required],
      date: ['',Validators.required],
      name: ['', Validators.required],
      phone: ['',Validators.required],
      comment: ['', Validators.required],});
      this.userDetail = this.navParams.data;
      console.log(this.userDetail);
    this.stdId = this.navParams.data;
    console.log( this.stdId);
    this.giveCommentstdnt(this.stdId);
  }
  Addcomment(){
    console.log(this.createUser);
    this.authService.httpRequest('/comment/create', this.createUser)
    
    .subscribe(
    data => {
    console.log(data);},
    error => console.error(error));

    const toast = this.toastCtrl.create({
      message: 'Your comment submitted',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  this.navCtrl.push(HomePage, );
  }

  

  giveCommentstdnt(stdId){
    const url = 'http://localhost:3000/comment';
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post(url, {stdId}, { headers: headers })
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error.json()))
    .subscribe(
    data => {
    console.log(data);
    this.comments = data;
    
    },
    error => console.error(error)
    );
    }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

}
