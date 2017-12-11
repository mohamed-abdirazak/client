import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { ExaminationPage } from '../examination/examination';
import{FeePage} from '../fee/fee';
import {AttendancePage} from '../attendance/attendance';


@IonicPage()
@Component({
selector: 'page-userdetail',
templateUrl: 'userdetail.html',
})
export class UserdetailPage {
public userDetail ={};
constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams){
this.userDetail = this.navParams.data;
console.log(this.userDetail);
}
openModal(){
let modal = this.modalCtrl.create(SignupPage);
modal.present();
}

ionViewDidLoad() {
console.log('ionViewDidLoad UserdetailPage');
}
getStudentId(studentId){
    this.navCtrl.push(ExaminationPage, studentId);

}
getFeeStudent(studentId){
    this.navCtrl.push(FeePage, studentId);  
}
getAttendanceStudent(studentId){
    this.navCtrl.push(AttendancePage, studentId )
}

}




