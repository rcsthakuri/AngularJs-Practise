import { Directive, ElementRef, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[appFontColorChanger]'
})
export class FontColorChangerDirective {
  @Input('appFontColorChanger') color: String;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.color);
  }
}
