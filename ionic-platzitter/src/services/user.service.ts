import { Injectable } from '@angular/core';

import { User } from '../commons/user';
import { USERS } from './mocks/users';

//import { DBService } from '../services/db.service'

@Injectable()
export class UserService {

  /*constructor(private dbservice:DBService){
    dbservice.openDatabase();
  }*/

  getUser(): Promise<User[]> {
    console.log("entre al promise");
    return Promise.resolve(USERS);
  }

  loginUser(email, password): Promise<User> {
    let user: User;
    //find user
    user = this.find(email, password);
    console.log(user);
    return Promise.resolve(user);
  }

  find(email, password): User {
    let user: User;
    user = USERS.find(x => x.email === email);
    console.log(user);
    return user;
  }


}