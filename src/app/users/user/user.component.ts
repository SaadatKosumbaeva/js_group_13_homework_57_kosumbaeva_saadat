import { Component, Input } from '@angular/core';
import { User } from '../../shared/user.module';
import { GroupService } from '../../shared/group.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user!: User;

  constructor(private groupService: GroupService) {}

  activeStatusHandler() {
    if (this.user.active) {
      return 'Active';
    } else {
      return 'Inactive';
    }
  }

  addUserToGroup() {
    this.groupService.addUserToGroup(this.user.name);
  }
}
