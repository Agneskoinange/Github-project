import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private light:ElementRef) { }
  @HostListener("mouseenter") onMouseEnter(){
    this.lightup("yellow");
  }
  @HostListener("mouseleave") onMouseLeave(){
    this.lightup("");
  }
  private lightup(color:string){
    this.light.nativeElement.style.backgroundColor= color;
  }
}
