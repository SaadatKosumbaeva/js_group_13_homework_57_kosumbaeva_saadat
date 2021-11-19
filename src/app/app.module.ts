import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserService } from './shared/user.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
