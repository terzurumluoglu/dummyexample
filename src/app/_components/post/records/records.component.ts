import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/_model/post';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  posts: Post[];
  showPostCount: number = 20;
  currentPage : number = 1;
  pages: number[];
  showList:Post[];
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAllPosts();
    this.go(this.currentPage);
  }

  getAllPosts() {
    this.activatedRoute.data.subscribe(p => {
      this.posts = p.posts;
      this.createPageArray(this.calculatePageArrayLength());
    });
  }

  getTargetPost(targetLength : number){
    const start : number = 20 * (targetLength -1);
    const end : number = 20 * targetLength;
    this.showList = this.posts.slice(start,end)
  }

  calculatePageArrayLength() {
    return Math.ceil(this.posts.length / this.showPostCount);
  }

  createPageArray(count: number) {
    this.pages = [...Array(count).keys()].map(t => t + 1);
  }

  next() {
    if(this.calculatePageArrayLength() === this.currentPage){
      return;
    }
    this.currentPage = this.currentPage + 1;
    this.getTargetPost(this.currentPage);
  }

  previous() {
    if(this.currentPage === 1){
      return;
    }
    this.currentPage = this.currentPage - 1;
    this.getTargetPost(this.currentPage);
  }

  go(i: number) {
    this.currentPage = i;
    this.getTargetPost(this.currentPage);
  }

}
