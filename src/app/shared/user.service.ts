import { User } from './user.module';
import { EventEmitter } from '@angular/core';

export class UserService {
  usersChange = new EventEmitter<User[]>();
  private users: User[] = [
    new User('Admin','admin@gmail.com',true,'Admin'),
    new User('John','john@gmail.com',false,'User'),
    new User('Isaac','admin@gmail.com',true,'Editor'),
    new User('Jane','admin@gmail.com',true,'User'),
  ];

  getUsers() {
    return this.users.slice();
  }

  addUser(user: User) {
    const existingUser = this.users.find(userItem => userItem.name === user.name && userItem.email === user.email);

    if (existingUser) {
      return alert('Such user already exists');
    } else {
      this.users.push(user);
    }

    this.usersChange.emit(this.users);
  }
}
