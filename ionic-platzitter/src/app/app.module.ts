import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { NotificationPage } from '../pages/notification/notification';
import { VerNotificationPage } from '../pages/notification/verNotification';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import  { Fav } from '../components/fav/fav';

import { UserService } from '../services/user.service'
import { DBService } from '../services/db.service'

//refactor para router
var links: [
    { component: LoginPage, name: 'Login', segment:'login'},
    { component: TabsPage, name: 'tabs', segment: 'tabs' }
  ];



@NgModule({
  declarations: [
    MyApp,
    NotificationPage,
    VerNotificationPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    Fav
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{},{links})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotificationPage,
    VerNotificationPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    Fav
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService, DBService
  ]
}) 
export class AppModule {}
