import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener ('click')onMouseClick(){
    this.changeColor("lightBlue")
  }
  constructor(private el: ElementRef) {
    this.changeColor('yellow')
   }

   changeColor(color: string): void{
    this.el.nativeElement.style.backgroundColor=color;
   }
}
