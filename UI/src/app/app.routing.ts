import { ExploreMoreComponent } from './components/explore-more/explore-more.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';

import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { PortfolioPageBlogComponent } from './components/portfolio-page-blog/portfolio-page-blog.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminDemoComponent } from './components/admin-demo/admin-demo.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent},
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent,},
    { path: 'password-reset',   component: PasswordResetComponent,},
    { path: 'portfolio-blog',   component: PortfolioPageBlogComponent,},
    { path: 'explore-more',   component: ExploreMoreComponent,},
    { path: 'admin-demo',   component: AdminDemoComponent,},

    // Catch alls
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
