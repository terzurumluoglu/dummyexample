import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  returnUrl : string;
  constructor(
    private route: ActivatedRoute,
    private _authenticationService: AuthenticationService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.user = this._authenticationService.userValue;
    this.routeComponent();
  }

  async logIn() {
    this.user = await this._authenticationService.logIn('test');
    this.routeComponent();
  }

  logOut() {
    this._authenticationService.logOut();
    this.user = null;
  }

  routeComponent(){
    if (this.user && this.user != null) {
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.router.navigate([this.returnUrl]);
    }
  }

}
