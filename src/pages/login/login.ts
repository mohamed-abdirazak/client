import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { HttpService } from '../../providers/http-service/http-service';
import {SignupPage} from '../signup/signup';
/**
* Generated class for the LoginPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
@Component({
selector: 'page-login',
templateUrl: 'login.html',
})
export class LoginPage {
loginForm: FormGroup;
user = {username: '', password: ''};

constructor(public navCtrl: NavController, public navParams: NavParams,
  public viewCtrl: ViewController,private formBuilder: FormBuilder,private authService: HttpService) {
  this.loginForm = this.formBuilder.group({
  username: ['', Validators.required],
  password: ['',Validators.required],
  });
  }
  login() {
  this.authService.httpRequest('/login', this.user)
  .subscribe(
  data => {
  console.log(data);
  this.navCtrl.push(HomePage);},
  error => console.error(error)
  );
  }
  openModal(){
    this.navCtrl.push(SignupPage);
  }
}
  