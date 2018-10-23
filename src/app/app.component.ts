import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showSmallNav: boolean;
  onCheckChangeNav(show) {
    this.showSmallNav = show;
  }
}
