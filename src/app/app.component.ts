import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page = 'Users and Groups';

  onManageClick() {
    this.page = 'Manage';
  }

  onUsersAndGroupsClick() {
    this.page = 'Users and Groups';
  }
}
