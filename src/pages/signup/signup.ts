import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators,NgForm } from '@angular/forms';
import { HttpService } from '../../providers/http-service/http-service';
import { LoginPage } from '../login/login';
import { UserdetailPage } from '../userdetail/userdetail';
import { App } from 'ionic-angular/components/app/app';

@IonicPage()
@Component({
selector: 'page-signup',
templateUrl: 'signup.html',
})
export class SignupPage {
public userDetail ={};
signupForm: FormGroup;
createUser = {username: '', password: '', name: '', email: '' };
constructor(public app: App,public navCtrl: NavController, public navParams: NavParams,
public viewCtrl: ViewController,private formBuilder: FormBuilder,private authService: HttpService) {
  this.signupForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['',Validators.required],
    name: ['', Validators.required],
    email: ['',Validators.required],});
    this.userDetail = this.navParams.data;
    console.log(this.userDetail);}
    signUp(){
    console.log(this.createUser);
    this.authService.httpRequest('/login/create', this.createUser)
    .subscribe(
    data => {
    console.log(data);},
    error => console.error(error));
    this.navCtrl.popTo(UserdetailPage);}
    goTologin(){
this.navCtrl.push(LoginPage);
   }
    ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  
  }
}
    
    
    