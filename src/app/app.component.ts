import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorage } from './commons/services/localStorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng7app';
  isLogedIn: boolean;
  
  constructor(private router: Router){

  }

  logout(){
    LocalStorage.clear();
    this.router.navigateByUrl('/account/login');

  }

  ngOnInit(){
    this.isLogedIn = LocalStorage.get('token') ? true : false;
  }
}
