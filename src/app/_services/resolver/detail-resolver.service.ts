import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/_model/post';
import { ResourceService } from '../resource/resource.service';

@Injectable({
  providedIn: 'root'
})
export class DetailResolverService implements Resolve<Observable<Post>> {

  constructor(private resourceService :ResourceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> { 
    let postId = parseInt(route.paramMap.get('postId'));
    return this.resourceService.getPost(postId);
  }
}
