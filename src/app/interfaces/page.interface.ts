import { ElementRef } from '@angular/core';

export interface Page {
  name: string;
  rect: ClientRect;
  element: ElementRef;
}
