import { fromEvent } from 'rxjs';
import { Injectable, ElementRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Page } from '../interfaces/page.interface';

type Target = Document | Element;

@Injectable()
export class ElementScrollPercentage {

  pages: Page[] = [];
  constructor() {}

  public getScroll(node: Target = document): number {
    const currentScroll = this.getCurrentScroll(node);
    const maxScroll = this.getMaxScroll(node);

    // Ensure that the percentage falls strictly within (0,1).
    let percent = currentScroll / Math.max(maxScroll, 1);
    percent = Math.max(percent, 0);
    percent = Math.min(percent, 1);

    // Return the percentage in a more human-consumable format.
    return percent * 100;
  }

  addPage(element: ElementRef, name: string): void {
    this.pages.push({
      name: name,
      rect: element.nativeElement.getBoundingClientRect(),
      element: element
    });
  }

  getPages(): Page[] { return this.pages; }

  public getScrollAsStream(node: Target = document): Observable<number> {
    let stream;
    if (node instanceof Document) {

      stream = fromEvent(window, 'scroll').pipe(
        map((event: UIEvent): number => this.getScroll(node))
      );
    } else {

      stream = fromEvent(node, 'scroll').pipe(
        map((event: UIEvent): number => this.getScroll(node))
      );
    }

    return stream;
  }

  // I return the current scroll offset (in pixels) of the given DOM node.
  private getCurrentScroll(node: Target): number {
    if (node instanceof Document) {

      return window.pageYOffset;
    } else {

      return node.scrollTop;
    }
  }

  // I return the maximum scroll offset (in pixels) of the given DOM node.
  private getMaxScroll(node: Target): number {
    // When we want to get the available scroll height of the DOCUMENT, things get
    // a little peculiar from a cross-browser consistency standpoint. As such, when
    // dealing with the Document node, we have to look in a few different places.
    // --
    // READ MORE: https://javascript.info/size-and-scroll-window
    if (node instanceof Document) {
      const scrollHeight = Math.max(
        node.body.scrollHeight,
        node.body.offsetHeight,
        node.body.clientHeight,
        node.documentElement.scrollHeight,
        node.documentElement.offsetHeight,
        node.documentElement.clientHeight
      );

      const clientHeight = node.documentElement.clientHeight;

      return scrollHeight - clientHeight;
    } else {
      return node.scrollHeight - node.clientHeight;
    }
  }
}
