import { Component, Input } from '@angular/core';
import { Group } from '../../shared/group.module';
import { GroupService } from '../../shared/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {
  @Input() group!: Group;

  constructor(private groupService: GroupService) {}

  onGroupClick() {
    this.groupService.currentGroup = this.group;
  }

  classForCurrentGroup() {
    if (this.groupService.currentGroup === this.group) {
      return 'alert alert-secondary';
    } else {
      return '';
    }
  }
}
