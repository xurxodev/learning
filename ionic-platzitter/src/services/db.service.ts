import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DBService {

    db: SQLite = null;

    constructor() {
        this.db = new SQLite();
    }

    openDatabase() {
        return this.db.create({
            name: 'data.db',
            location: 'default'
        })
            .then((db: SQLiteObject) => {
                db.executeSql(`CREATE TABLE IF NOT EXISTS users(
                    id INTEGER PRIMARY KEY AUTOINCREMENT, 
                    nick_name TEXT,
                    full_name TEXT,
                    email TEXT,
                    password TEXT)`, {})
                    .then(() => console.log('Executed SQL'))
                    .catch(e => console.log(e));


            })
            .catch(e => console.log(e));

    }

    getAll() {
        return this.db.create({
            name: 'data.db',
            location: 'default'
        })
            .then((db: SQLiteObject) => {
                db.executeSql(`SELECT * FROM users`, {})
                    .then(response => {
                        let users = [];
                        for (let index = 0; index < response.rows.length; index++) {
                            users.push(response.rows.item(index));
                        }
                        return Promise.resolve(users)
                    })
                    .catch(e => console.log(e));


            })
            .catch(e => console.log(e));
    }

    create(user: any) {
        return this.db.create({
            name: 'data.db',
            location: 'default'
        })
            .then((db: SQLiteObject) => {
                db.executeSql('INSERT INTO users(nick_name, full_name, email, password) VALUES(?,?,?.?)',
                    [user.nick_name, user.full_name, user.email, user.password])
            })
            .catch(e => console.log(e));
    }

    update(user: any) {
        return this.db.create({
            name: 'data.db',
            location: 'default'
        })
            .then((db: SQLiteObject) => {
                db.executeSql('UPDATE users SET nick_name=?, full_name=?, email=?, password=? WHERE id=?',
                    [user.nick_name, user.full_name, user.email, user.password, user.id])
            })
            .catch(e => console.log(e));
    }

    delete(user: any) {
        return this.db.create({
            name: 'data.db',
            location: 'default'
        })
            .then((db: SQLiteObject) => {
                db.executeSql('DELETE FROM users WHERE id=?',
                    [user.id])
            })
            .catch(e => console.log(e));
    }

}