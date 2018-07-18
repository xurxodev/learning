import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Twitt} from '../../commons/twitt';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  twittList:Array<Twitt> = [
    {img:"https://pbs.twimg.com/profile_images/631520492260839424/kG3suEXq_bigger.jpg", nick_name:"@xurxodev", text:"example ionic"},
    {img:"https://pbs.twimg.com/profile_images/902953212696768523/wMWePMB9_bigger.jpg", nick_name:"@karatestarsapp", text:"example ionic"},
    {img:"https://pbs.twimg.com/profile_images/755352605488971776/-bbgzJPy_bigger.jpg", nick_name:"@kireidev", text:"example ionic"}
  ];

  constructor(public navCtrl: NavController) {

  }

  handleOnFav(response:string){
    alert(response);
  }
}


