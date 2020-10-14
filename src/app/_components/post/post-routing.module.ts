import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordsComponent,DetailComponent } from './';
import { AuthenticationService, DetailResolverService, RecordResolverService } from "../../_services";

const routes: Routes = [
  {
    path: '',
    component: RecordsComponent,
    resolve: { posts: RecordResolverService }
  },
  {
    path: 'detail/:postId',
    component: DetailComponent,
    resolve: { data: DetailResolverService },
    data: { post: 'postId' }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
