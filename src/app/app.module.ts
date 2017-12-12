import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpModule} from '@angular/http'
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import {LoginPage} from '../pages/login/login';
import {SignupPage} from '../pages/signup/signup';
import {UserdetailPage} from '../pages/userdetail/userdetail';
import { ExaminationPage } from '../pages/examination/examination';
import{FeePage} from '../pages/fee/fee';
import{AttendancePage} from '../pages/attendance/attendance';
import {CommentPage} from '../pages/comment/comment'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpService } from '../providers/http-service/http-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    UserdetailPage,
    ExaminationPage,
    FeePage,
    AttendancePage,
    CommentPage

  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    UserdetailPage,
    ExaminationPage,
    FeePage,
    AttendancePage,
    CommentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpService
  ]
})
export class AppModule {}
