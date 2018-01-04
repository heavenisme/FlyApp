import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot} from '@angular/router';
import {User} from '../user.model';
import {flyIn} from '../../anim/fly-in';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [flyIn]
})
export class LoginComponent implements OnInit {

  public user: User = new User();
  public error: Error;

  constructor(public router: Router,
              public activatedRoute: ActivatedRoute,
              public userService: UserService) {
    console.log(this.userService);
  }

  ngOnInit() {
    console.log('--- user-login-component ---');
    console.log(this.router);
    console.log(this.activatedRoute);

    const activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    const routerState: RouterState = this.router.routerState;
    const routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

    console.log(activatedRouteSnapshot);
    console.log(routerState);
    console.log(routerStateSnapshot);
  }

  public doLogin(): void {
    console.log(this.user);
    this.userService.login(this.user);
  }

  public doLogout(): void {
    this.userService.logout();
    this.router.navigateByUrl('home');
  }

  public forgetPwd(): void {
    this.router.navigateByUrl('forgetpwd');
  }
}
