import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faPaperPlane, faEnvelope, faTicketAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { ScrollTrackingDirective } from './directives/scroll-tracking.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

// Add an icon to the library for convenient access in other components
library.add(faBars, faPaperPlane, faEnvelope, faTicketAlt, faMobileAlt);

@NgModule({
  declarations: [AppComponent, ScrollTrackingDirective, NavbarComponent],
  imports: [
    CommonModule,
    NgtUniversalModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [ScrollToService]
})
export class AppModule {}
