import {Component, HostListener, ElementRef, Renderer, ViewContainerRef, OnInit} from '@angular/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public elementRef: ElementRef,
              public renderer: Renderer,
              public router: Router,
              public translate: TranslateService,
              public toastr: ToastsManager,
              public vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
    console.log('什么也没有');
  }

  ngOnInit() {
    // --- set i18n begin ---
    this.translate.addLangs(['zh', 'en']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    console.log(browserLang);
    // --- set i18n end ---
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
    this.toastr.success('退出成功！', '系统提示');
    this.router.navigateByUrl('');
  }
}
