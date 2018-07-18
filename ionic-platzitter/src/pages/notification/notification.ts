import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Notification } from '../../commons/notification';

import { VerNotificationPage } from './verNotification';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  notifications:Array<Notification> = [
    {action: "reply", img:"https://pbs.twimg.com/profile_images/631520492260839424/kG3suEXq_bigger.jpg", nick_name:"@xurxodev", text:"example ionic"},
    {action: "reply", img:"https://pbs.twimg.com/profile_images/902953212696768523/wMWePMB9_bigger.jpg", nick_name:"@karatestarsapp", text:"example ionic"},
    {action: "reply", img:"https://pbs.twimg.com/profile_images/755352605488971776/-bbgzJPy_bigger.jpg", nick_name:"@kireidev", text:"example ionic"}
  ];
  
  constructor(public navCtrl: NavController) {

  }

  verNotification(_notification:Notification){
    debugger;
    console.log("Abriendo notificacion: " + _notification.nick_name);
    this.navCtrl.push(VerNotificationPage, {
      id: _notification
    });
  }
}

