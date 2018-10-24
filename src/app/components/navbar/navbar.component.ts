import { Component } from '@angular/core';
import { Navbar } from './../../animations/bootstrap.animation';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { of, Subscription } from 'rxjs';
import { concatMap, timeout, catchError, delay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    Navbar
  ]
})
export class NavbarComponent {

  showSmallNav: boolean;
  showMobileMenu = false;
  collapsing = false;
  sub: Subscription;
  constructor(private scrollService: ScrollToService) { }

  onCheckChangeNav(show): void {
    this.showSmallNav = show;
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  scrollIntoView(event: Event, page: string) {

    event.preventDefault();
    event.stopPropagation();
    const config: ScrollToConfigOptions = {
      target: page, duration: 1000,
      easing: 'easeOutQuart',
    };
    this.scrollService.scrollTo(config).subscribe(e => {
      window.location.hash = page;
    });
  }
}
