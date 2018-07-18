import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { Notification } from '../../commons/notification';
import { Profile } from '../../commons/profile';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  me:Profile = {img:"https://pbs.twimg.com/profile_images/631520492260839424/kG3suEXq_400x400.jpg",
          nick_name:"xurxodev",
          interactions:1,
          github:"xurxodev",
          twitter:"xurxodev",
          medium:"xurxodev",
          bio:"xurxodev is fkfknv flv fln vlfj vlfj vj flkj vlfj vlkj flkjv lfjvlfj vjfl vlkfj vlkfjvlj flvjfljv lfkj vlkfj v"
  }

  notifications:Array<Notification> = [
    {action: "reply", img:"https://pbs.twimg.com/profile_images/631520492260839424/kG3suEXq_bigger.jpg", nick_name:"@xurxodev", text:"example ionic"},
    {action: "reply", img:"https://pbs.twimg.com/profile_images/902953212696768523/wMWePMB9_bigger.jpg", nick_name:"@karatestarsapp", text:"example ionic"},
    {action: "reply", img:"https://pbs.twimg.com/profile_images/755352605488971776/-bbgzJPy_bigger.jpg", nick_name:"@kireidev", text:"example ionic"}
  ];
  
  constructor(public navCtrl: NavController) {

  }

}


