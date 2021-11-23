import { Group } from './group.module';
import { EventEmitter } from '@angular/core';

export class GroupService {
  groupsChange = new EventEmitter<Group[]>();
  private groups: Group[] = [
    new Group('Hiking group', ['Admin', 'John']),
    new Group('Book club', ['Jane', 'Isaac']),
  ];
  currentGroup!: Group;

  getGroups() {
    return this.groups.slice();
  }

  addGroup(group: Group) {
    const existingGroup = this.groups.find(groupItem => groupItem.groupName === group.groupName);

    if (existingGroup) {
      return alert('Such a group already exists');
    } else {
      this.groups.push(group);
    }

    this.groupsChange.emit(this.groups);
  }

  addUserToGroup(userName: string) {
    if (this.currentGroup !== undefined) {
      const existingUser = this.currentGroup.users.find(userItem => userItem === userName);

      if (existingUser) {
        return alert('This user is already in this group');
      } else {
        this.currentGroup.users.push(userName);
      }
    } else {
      alert('Select a group to add a user to it');
    }
  }
}
