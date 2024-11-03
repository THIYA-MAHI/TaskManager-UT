import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../service/task.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {  UserService } from '../../service/user.service';
import { User } from '../../model';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css',
})
export class TaskAddComponent {
  users: User[] = [];
  profileForm:FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService, private userService: UserService,
    private router: Router, private toastr: ToastrService) {
    this.profileForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      dueDate: [''],
      priority: ['Medium'],
      assigneeId: [''],
      checkLists: this.fb.array([])
    });
  }

  get myCheckLists(): FormArray {
    return this.profileForm.get('checkLists') as FormArray
  }

  addChecklist() {
    this.myCheckLists.push(this.fb.group({
      name: [''],
      isDone: [false]
    }))
  }

  removeChecklist(index: number) {
    this.myCheckLists.removeAt(index);
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  onSubmit() {
    let task = this.profileForm.value;
    this.taskService.createTask(task).subscribe(data => {
      this.toastr.success("Task is created successfully.", "Success");
      this.router.navigate(['/tasks'])
    })
  }

  close() {
    this.router.navigate(['/tasks'])
  }

}
