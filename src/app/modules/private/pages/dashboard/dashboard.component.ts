import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../../commons/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: any[];

  constructor(private userService: UserService) {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAll().subscribe((res: any) => {
      this.users = res.data;
      console.log(this.users);
    });
  }

  ngOnInit() {
  }

}
