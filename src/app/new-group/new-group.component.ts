import { Component } from '@angular/core';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group.module';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent {
  groupName = '';
  users: string[] = [];

  constructor(private groupService: GroupService) {}

  addGroup() {
    if (this.groupName.trim().length) {
      this.users = [];
      const newGroup = new Group(this.groupName, this.users);
      this.groupService.addGroup(newGroup);
      this.groupName = '';
    } else {
      alert('Enter data');
    }
  }
}
