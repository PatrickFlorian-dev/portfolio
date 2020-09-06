import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BtnHoverClassDirective } from './shared/directives/btn-hover-class.directive';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AngularToasterWithProgressbarModule } from 'angular-toaster-with-progressbar';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LeafletModule,
    AngularToasterWithProgressbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
