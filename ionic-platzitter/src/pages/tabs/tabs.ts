import { Component } from '@angular/core';

import { NotificationPage } from '../notification/notification';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NotificationPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
