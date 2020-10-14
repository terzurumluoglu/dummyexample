import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_components/home/home.component';
import { StaticComponent } from './_components/home/static/static.component';
import { PostModule } from './_components/post/post.module';
import { HttpClientModule } from "@angular/common/http";
import { AuthenticationService, RecordResolverService } from './_services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StaticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PostModule
  ],
  providers: [RecordResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _authenticationService : AuthenticationService){
    const user : any = JSON.parse(localStorage.getItem('user') || null);
    if (user && user != null) {
      _authenticationService.userSubject.next(user);
    }

  }
}
