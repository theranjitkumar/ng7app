import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../../commons/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private apiService: ApiService) {
    this.getPost();
  }

  getPost() {
    this.apiService.getAll().subscribe((res: any) => {
      this.posts = res;
      console.log(res);

    });
  }

  ngOnInit() {
  }

}
