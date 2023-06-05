import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightDone]',
})
export class HighlightDoneDirective implements OnInit {
  @Input('appHighlightDone') isDone!: boolean;

  constructor(private _element: ElementRef, private _renderer: Renderer2) {
  }
  
  ngOnInit(): void {
    if (this.isDone) {
      this._renderer.addClass(this._element.nativeElement, 'completed');
    } else {
      this._renderer.removeClass(this._element.nativeElement, 'completed');
    }
  }
}
