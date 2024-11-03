import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAddComponent } from './component/task-add/task-add.component';
import { TaskListComponent } from './component/task-list/task-list.component';
import { TaskEditComponent } from './component/task-edit/task-edit.component';
import { UserListComponent } from './componentUser/user-list/user-list.component';
import { UserAddComponent } from './componentUser/user-add/user-add.component';
import { RegisterComponent } from './componentRole/register/register.component';
import { LogInComponent } from './componentRole/log-in/log-in.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LogInComponent},
  { path: 'home', component: HomeComponent},


  { path: 'tasks', component: TaskListComponent},
  { path: 'users', component: UserListComponent},

  { path: 'add-task', component: TaskAddComponent},
  { path: 'add-user', component: UserAddComponent},

  { path: 'edit-task/:id', component: TaskEditComponent},
  { path: 'edit-user/:id', component: UserAddComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
