import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// Add an icon to the library for convenient access in other components
library.add(faBars, faPaperPlane);

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    NgtUniversalModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: []
})
export class AppModule {}
