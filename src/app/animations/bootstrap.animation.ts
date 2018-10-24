import { trigger, transition, state, style, animate } from '@angular/animations';

export const Navbar = trigger('navbar', [
  state('open', style({
    maxHeight: '100%'
  })),
  state('close', style({
    maxHeight: '89px'
  })),
  transition('open <=> close', [
    animate('.7s')
  ])
]);
