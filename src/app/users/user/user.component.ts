import { Component, Input } from '@angular/core';
import { User } from '../../shared/user.module';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user!: User;

  activeStatusHandler() {
    if (this.user.active) {
      return 'Active';
    } else {
      return 'Inactive';
    }
  }
}
