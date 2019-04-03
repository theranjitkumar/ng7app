import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfig } from '../config/appConfig';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    console.log(AppConfig.url);
  }

  login(params) {
    return this.http.post(`${AppConfig.url}/login`, params);
  }

  // getAll() {
  //   return this.http.get(`${AppConfig.url}/users`);
  // }

  // getById(id) {
  //   return this.http.get(`${AppConfig.url}/users/${id}`);
  // }

  // delete(id) {
  //   return this.http.delete(`${AppConfig.url}/users/${id}`);
  // }

  // update(id, params) {
  //   return this.http.put(`${AppConfig.url}/users/${id}`, params);
  // }

}
