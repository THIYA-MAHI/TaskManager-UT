import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
url = 'http://localhost:5086/api/TaskItems';
constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<Task[]>(this.url);
  }

  createTask(task: Task) {
    return this.http.post(this.url, task);
  }

  deleteTask(taskId: number) {
    return this.http.delete(this.url + '/' + taskId);
  }

  getTask(taskId: number) {
    return this.http.get<Task>(this.url + '/' + taskId);
  }

  updateTask(task: Task, taskId: number) {
    return this.http.put(this.url + '/' + taskId, task);
  }


}
