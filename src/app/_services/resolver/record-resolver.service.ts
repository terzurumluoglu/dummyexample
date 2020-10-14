import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Post } from "../../_model/post";
import { Observable } from 'rxjs';
import { ResourceService } from '../resource/resource.service';

@Injectable({
  providedIn: 'root'
})
export class RecordResolverService implements Resolve<Observable<Post>> {

  constructor(private resourceService :ResourceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> {
    return this.resourceService.getAllPosts();
  }
}
