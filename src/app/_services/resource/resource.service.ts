import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/_model/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  
  constructor(private http: HttpClient) { }

  getAllPosts(){
    return this.http.get<Post>(`${environment.apiUrl}posts`);
  }

  getPost(postId : number){
    return this.http.get<Post>(`${environment.apiUrl}posts/${postId}`);
  }
}
