import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../commons/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authToken: string;

  constructor(private userService: UserService) { }

  login() {
    const user = {
      email: 'test@email.com',
      password: 'password'
    };

    this.userService.login(user).subscribe((res: any) => {
      this.authToken = res;
      sessionStorage.setItem('token', res.token);
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
