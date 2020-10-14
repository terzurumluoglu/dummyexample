import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/_model/post';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  post :Post;
  constructor(private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
    this.activatedRoute.data.subscribe(p => {
      this.post = p.data;
    });
  }
}