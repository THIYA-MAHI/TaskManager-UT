import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from '../../model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  searchText: string = '';
  users: User[] = [];

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.loadUser();
  }

  onDelete(userId: number) {
    if(confirm('Do you want to delete?')) {
      this.userService.deleteUser(userId).subscribe(data => {
        this.toastr.success('User is deleted', "Deleted", {
          timeOut: 10000,
          closeButton: true
        });
        this.loadUser();
      });
    }
  }

  loadUser() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  onEdit(userId: number) {
    this.router.navigate(['/edit-user', userId])
  }

}
