import { Directive, HostListener, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[appScrollTracking]'
})
export class ScrollTrackingDirective {

  timeout;
  @Output() checkChangeNav: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() maxScrollBeforChange = 150;
  @Input() time = 200;

  checkChange(offset: number) {

    if (offset > 36) {

      setTimeout(() => {
        this.checkChangeNav.emit(offset >= this.maxScrollBeforChange);
      }, this.time);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any): void {
    clearTimeout(this.timeout);
    this.checkChange(window.pageYOffset);
  }
}
