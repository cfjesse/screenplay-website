import { Directive, HostListener, Output, EventEmitter, Input } from '@angular/core';
import { Page } from '../interfaces/page.interface';

@Directive({
  selector: '[appScrollTracking]'
})
export class ScrollTrackingDirective {

  timeout;
  @Output() checkChangeNav: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() maxScrollBeforChange = 150;
  @Input() time = 200;

  currentPage: Page;

  constructor() { }

  checkChange(offset: number, event) {

    if (offset > 36) {

      setTimeout(() => {
        this.checkChangeNav.emit(offset >= this.maxScrollBeforChange);
      }, this.time);
    }
  }

  @HostListener('window:scroll', ['$event'])
  @HostListener('window:load', ['$event'])
  onWindowScroll($event: Event): void {
    clearTimeout(this.timeout);
    this.checkChange(window.pageYOffset, $event);
  }
}
