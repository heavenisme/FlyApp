import { Component, HostListener, ElementRef, Renderer, ViewContainerRef } from '@angular/core';
import {TranslateService} from 'ng2-translate';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    public elementRef: ElementRef,
    public renderer: Renderer,
    public translate: TranslateService,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef

  ) {
    this.toastr.setRootViewContainerRef(vcr);
    console.log('什么也没有');
  }

  toggle(button: any) {
    console.log(button);
  }

  public doLogout(): void {
    this.toastr.success('退出成功！', '系统提示');
  }
}
