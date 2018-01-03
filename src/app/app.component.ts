import {Component, HostListener, ElementRef, Renderer, ViewContainerRef} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public elementRef: ElementRef,
              public renderer: Renderer,
              public router: Router,
              public translate: TranslateService,
              public toastr: ToastsManager,
              public vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
    console.log('什么也没有');

    // 添加语言支持
    translate.addLangs(['zh-CN', 'en']);
    // 设置默认语言，一般在无法匹配的时候使用
    translate.setDefaultLang('zh-CN');

    // 获取当前浏览器环境的语言比如en、 zh
    const broswerLang = translate.getBrowserLang();
    translate.use(broswerLang.match(/en|zh-CN/) ? broswerLang : 'zh-CN');
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
