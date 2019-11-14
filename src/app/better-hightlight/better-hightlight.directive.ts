import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit{
  @Input() defaultColor: string = 'coral';
  @Input('appBetterHightlight') highlightColor: string = 'blue';
  

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

   }
ngOnInit(){
  this.backgroundColor = this.defaultColor;
}

@HostListener('mouseenter') mouseover(evenData: Event){
 
  this.backgroundColor = this.highlightColor;
}
@HostListener('mouseleave') mouseleave(evenData: Event){

  this.backgroundColor = this.defaultColor;
}

}
