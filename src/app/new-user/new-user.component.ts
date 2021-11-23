import { Component } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.module';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  name = '';
  email = '';
  active = false;
  role = '';

  constructor(private userService: UserService) {}

  addUser() {
    if (this.name.trim().length &&
      this.email.trim().length &&
      this.role !== 'Select' &&
      this.role !== '') {

      const newUser = new User(this.name, this.email, this.active, this.role);
      this.userService.addUser(newUser);

      this.name = '';
      this.email = '';
      this.active = false;
      this.role = '';
    } else {
      alert('Data entered incorrectly');
    }
  }
}
