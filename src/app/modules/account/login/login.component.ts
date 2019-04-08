import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../commons/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(private userService: UserService) { }

  login() {

    // const user = {
    //   email: 'test@email.com',
    //   password: 'password'
    // };
    this.userService.login(this.user).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
