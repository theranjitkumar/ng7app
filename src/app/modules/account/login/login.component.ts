import { Component, OnInit } from '@angular/core';

import {LocalStorage} from '../../../commons/services/localStorage.service'
import { UserService } from '../../../commons/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(LocalStorage: LocalStorage ,private userService: UserService) { }

  login() {

    // const user = {
    //   email: 'test@email.com',
    //   password: 'password'
    // };
    this.userService.login(this.user).subscribe((res: any) => {
      LocalStorage.set('token', res.token);
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
