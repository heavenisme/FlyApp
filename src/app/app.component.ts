import {Component, HostListener, ElementRef, Renderer, ViewContainerRef, OnInit} from '@angular/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {User} from './ui/user/user.model';
import {UserService} from './ui/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  currentUser: User;

  constructor(public elementRef: ElementRef,
              public renderer: Renderer,
              public router: Router,
              public activatedRoute: ActivatedRoute,
              public translate: TranslateService,
              public toast: ToastsManager,
              public vcr: ViewContainerRef,
              public userService: UserService) {
    this.toast.setRootViewContainerRef(vcr);
    console.log('什么也没有');
  }

  ngOnInit() {
    this.initLanguage();
    this.initUser();
  }

  private initLanguage() {
    // --- set i18n begin ---
    this.translate.addLangs(['zh', 'en']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    console.log(browserLang);
    // --- set i18n end ---
  }

  private initUser() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;
      const activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
      const routerState: RouterState = this.router.routerState;
      const routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

      console.log(activatedRouteSnapshot);
      console.log(routerState);
      console.log(routerStateSnapshot);

      if (routerStateSnapshot.url.indexOf('/login') !== -1) {
        this.router.navigateByUrl('/home');
      }

    }, error => console.error(error));
  }

  changeLang(lang) {
    console.log(lang);
    this.translate.use(lang);
  }

  toggleLang() {
    console.log(this.translate.getBrowserLang());
    // 获取语言风格，相当于更详细的语言类型，比如zh-CN、zh-TW、en-US
    console.log(this.translate.getBrowserCultureLang());
  }

  toggle(button: any) {
    console.log(button);
  }

  public doLogout(): void {
    this.toast.success('退出成功！', '系统提示');
    this.router.navigateByUrl('');
  }
}
