import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BtnHoverClassDirective } from 'app/shared/directives/btn-hover-class.directive';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { BlogShowcaseComponent } from './blog-showcase/blog-showcase.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { AngularToasterWithProgressbarModule } from 'angular-toaster-with-progressbar';

const components = [
    PortfolioComponent,
    AboutMeComponent,
    ComponentsComponent,
    ContactMeComponent,
    MySkillsComponent,
    BlogShowcaseComponent,
    PasswordResetComponent,
]

const directives = [
    BtnHoverClassDirective,
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        LeafletModule,
        HttpClientModule,
        HttpModule,
        ReactiveFormsModule,
        AngularToasterWithProgressbarModule,
    ],
    declarations: [
        directives,
        components,
        NgbdModalComponent,
        NgbdModalContent
    ],
    entryComponents: [NgbdModalContent],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
