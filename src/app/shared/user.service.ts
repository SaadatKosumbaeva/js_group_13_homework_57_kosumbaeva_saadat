import { User } from './user.module';
import { EventEmitter } from '@angular/core';

export class UserService {
  usersChange = new EventEmitter<User[]>();
  private users: User[] = [
    {name: 'Admin', email: 'admin@gmail.com', active: true, role: 'Admin'},
    {name: 'John', email: 'john@gmail.com', active: false, role: 'User'},
    {name: 'Isaac', email: 'isaac@gmail.com', active: true, role: 'Editor'},
    {name: 'Kate', email: 'kate@gmail.com', active: true, role: 'User'},
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
