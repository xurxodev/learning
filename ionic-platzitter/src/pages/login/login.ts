import { Component } from '@angular/core';

import { AlertController, LoadingController, NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { UserService } from '../../services/user.service'
import { DBService } from '../../services/db.service'

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    user = { "email": "", "password": "" };

    constructor(private alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
        private userService: UserService,
        private dbservice: DBService) { 
            debugger;
            this.dbservice.openDatabase();
            console.dir(dbservice.getAll);
        }

    ngOnInit() {
        console.log("arranco el init")
    }

    login() {
        if (this.user.email != "" && this.user.password != "") {
            //let users;

            let loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();

            //let login = false;

            this.userService.loginUser(this.user.email, this.user.password)
                .then(
                (response) => {
                    loading.dismiss();

                    if (response !== undefined) {
                        this.navCtrl.push(TabsPage);
                    } else {
                        let alert = this.alertCtrl.create({
                            title: 'Login',
                            subTitle: 'Usuario y/o contraseña invalida.',
                            buttons: ['Aceptar']
                        });
                        alert.present();
                    }
                });
        }
        else {
            let alert = this.alertCtrl.create({
                title: 'Login',
                subTitle: 'Debe completar el usuario y contraseña',
                buttons: ['Aceptar']
            });
            alert.present();
        }
    }
}