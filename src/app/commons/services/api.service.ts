import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfig } from '../config/appConfig';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
    console.log(AppConfig.url);
  }

  getAll() {
    return this.http.get(`${AppConfig.url}/posts`);
  }

  getById(id) {
    return this.http.get(`${AppConfig.url}/posts/${id}`);
  }

  delete(id) {
    return this.http.delete(`${AppConfig.url}/posts/${id}`);
  }

  add(params) {
    return this.http.post(`${AppConfig.url}/posts`, params);
  }
  update(id, params) {
    return this.http.put(`${AppConfig.url}/posts/${id}`, params);
  }

}
