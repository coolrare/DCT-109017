import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'a[appNoLink]',
})
export class NoLinkDirective {

  constructor(elr: ElementRef) {
    const a = elr.nativeElement as HTMLAnchorElement;
    a.href = 'javascript:void(0);';
    a.onclick = () => false;
  }

}
