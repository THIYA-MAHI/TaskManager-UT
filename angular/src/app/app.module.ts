import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskAddComponent } from './component/task-add/task-add.component';
import { TaskListComponent } from './component/task-list/task-list.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TaskFilterPipe } from './pipe/task-filter.pipe';
import { TaskEditComponent } from './component/task-edit/task-edit.component';
import { UserAddComponent } from './componentUser/user-add/user-add.component';
import { UserListComponent } from './componentUser/user-list/user-list.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UserFilterPipe } from './pipe/user-filter.pipe';
import { RegisterComponent } from './componentRole/register/register.component';
import { LogInComponent } from './componentRole/log-in/log-in.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskAddComponent,
    TaskFilterPipe,
    TaskEditComponent,
    UserAddComponent,
    UserListComponent,
    UserFilterPipe,
    RegisterComponent,
    LogInComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    BsDatepickerModule,
    

  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
