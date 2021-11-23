import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserService } from './shared/user.service';
import { FormsModule } from '@angular/forms';
import { NewGroupComponent } from './new-group/new-group.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupComponent } from './groups/group/group.component';
import { GroupService } from './shared/group.service';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    UsersComponent,
    UserComponent,
    NewGroupComponent,
    GroupsComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService, GroupService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
