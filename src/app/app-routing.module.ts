import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { StaticComponent } from './_components/home/static/static.component';
import { AuthGuard } from "./_guard";

const routes: Routes = [
  {
    path :'home',
    component : HomeComponent
  },
  {
    path : 'static',
    component : StaticComponent
  },
  {
    path : 'record',
    loadChildren: () => import('./_components/post/post.module')
    .then(m => m.PostModule),
    canActivate : [AuthGuard]
  },
  {
    path : '**',
    redirectTo : 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
