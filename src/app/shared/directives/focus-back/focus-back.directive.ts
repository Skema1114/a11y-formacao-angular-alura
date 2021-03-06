import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusBack]',
})
export class FocusBackDirective implements OnInit, OnDestroy {
  private lastFocusedElement!: Element;

  constructor() {}

  public ngOnInit(): void {
    if (document.activeElement) {
      this.lastFocusedElement = document.activeElement;
    }
  }

  public ngOnDestroy(): void {
    if (this.lastFocusedElement) {
      (this.lastFocusedElement as HTMLElement).focus();
    }
  }
}
