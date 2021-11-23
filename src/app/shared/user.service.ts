import { User } from './user.module';
import { EventEmitter } from '@angular/core';

export class UserService {
  usersChange = new EventEmitter<User[]>();
  private users: User[] = [];

  getUsers() {
    return this.users.slice();
  }

  addUser(user: User) {
    if (this.users.length > 0) {
      this.users.forEach(userItem => {
        if (userItem.name === user.name && userItem.email === user.email && userItem.role === user.role) {
          alert('Such user already exists');
        } else {
          this.users.push(user);
        }
      });
    } else {
      this.users.push(user);
    }

    this.usersChange.emit(this.users);
  }
}
