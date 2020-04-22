import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[btn-hover-class]'
})
export class BtnHoverClassDirective {

  constructor(public elementRef:ElementRef) { }

  @Input('btn-hover-class') btnHoverClass:any;  
  
  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.classList.add(this.btnHoverClass);
 }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.btnHoverClass);
  }
  
}
