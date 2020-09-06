import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild, HostBinding, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import * as $ from 'jquery';
import { AuthService } from 'app/shared/services/auth.service';
import { UserInfo } from 'app/shared/interfaces/user-info';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('openClose', [
          // ...
          state('open', style({
            right: '-20%',
          })),
          state('closed', style({
            right: 0
          })),
          transition('open => closed', [
            animate('0.3s ease-in')
          ]),
          transition('closed => open', [
            animate('0.3s ease-in')
          ]),
        ]),
        
        trigger('openCloseLeftCont', [
        // ...
        state('open', style({
            right: 0,
        })),
        state('closed', style({
            right: '20%'
        })),
        transition('open => closed', [
            animate('0.4s ease-in')
        ]),
        transition('closed => open', [
            animate('0.4s ease-in')
        ]),
        ]),

        trigger('triggerUserModal', [
        // ...
        state('open', style({
            height: '100%',
            opacity: '1',
        })),
        state('close', style({
            height: '0%',
            opacity: '0',
        })),
        transition('open => close', [
            animate('0.3s ease-in')
        ]),
        transition('close => open', [
            animate('0.3s ease-in')
        ]),
        ]),

        trigger('triggerToggleSidebar', [
        // ...
        state('shown', style({
            left: '-45px',
        })),
        state('hidden', style({
            left: '0px',
        })),
        transition('shown => hidden', [
            animate('0.3s ease-in')
        ]),
        transition('hidden => shown', [
            animate('0.3s ease-in')
        ]),
        ]),

    ],
})
export class AppComponent implements OnInit {
    
    private _router: Subscription;

    isOpen: boolean = true;

    userModalOpen: boolean = true;

    showSidebarButton: boolean = false;

    loginLoading: boolean = false;

    curUserModalToRender: string;

    curModalError: string = null;

    emailValue: string = '';
    emailTouched: boolean;

    passwordValue: string = '';
    passwordTouched: boolean;

    firstNameValue: string = '';
    firstNameTouched: boolean;
    
    lastNameValue: string = '';
    lastNameTouched: boolean;

    registerEmailValue: string = '';
    registerEmailTouched: boolean;

    registerPasswordValue: string = '';
    registerPasswordTouched: boolean;

    registerPasswordConfirmValue: string = '';
    registerPasswordConfirmTouched: boolean;

    passwordResetEmailValue: string = '';
    passwordResetEmailTouched: boolean;

    loggedInUser: UserInfo = null;

    loginInputEvent: string = null;

    passwordResetSent: boolean = false;

    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor( 
        private renderer : Renderer, 
        private router: Router, @Inject(DOCUMENT,)
        private document: any, 
        private element : ElementRef,
        public location: Location,
        private authService: AuthService) {}
    
    ngOnInit() {

        var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];

        if(localStorage.getItem('Username')) {
            this.loadProfile();
        }

        setTimeout(()=>{
            $( "#loading-screen" ).fadeOut( 800, "linear");
        }, 3000);

        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }else{
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar.sidebarClose();
        });
        this.renderer.listenGlobal('window', 'scroll', (event) => {
            const number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            } else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');

        }

    }

    @HostListener('window:scroll', ['$event']) 
    showHideSidebarButton(event) {
        if(window.pageYOffset >= 800) {
            this.showSidebarButton = true
        } else {
            this.showSidebarButton = false
            !this.isOpen ? this.toggleSidebar() : null;
        }
    }

    toggleUserModal( action: string ) {
        this.curModalError = null;
        this.passwordResetSent = false;
        this.curUserModalToRender = action;
        this.userModalOpen = !this.userModalOpen;
    }

    switchUserModal(  action: string ) {
        this.curModalError = null;
        this.passwordResetSent = false;
        this.curUserModalToRender = action;
    }

    removeFooter() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        if(titlee === 'signup' || titlee === 'nucleoicons'){
            return false;
        }
        else {
            return true;
        }
    }

    toggleSidebar() {
        this.isOpen = !this.isOpen;
        this.showSidebarButton = true;
    }

    scrollToSection(idValue:string) {
        let section = <HTMLElement> document.querySelector(idValue);

        section.scrollIntoView({
            behavior: 'smooth',
        });
    }

    login() {

        if(!this.emailValue || !this.passwordValue) {
            this.curModalError = 'Username or Password is missing';
            return false;
        }

        this.loginLoading = true;
        this.loginInputEvent = 'loading';

        let user = {
            username: this.emailValue,
            password: this.passwordValue
        }

        this.authService.login(user).subscribe(
            data => { 
                if(data['token']) {
                    localStorage.setItem('Authorization Token', data['token']);
                    localStorage.setItem('Username', this.emailValue);
                    this.loginLoading = true;
                    this.toggleUserModal('close');
                    // window.location.reload();
                    this.loginInputEvent = 'login';
                    this.loadProfile()
                }
            },
            err => {
                this.loginInputEvent = null
                this.loginLoading = false
                this.curModalError = 'Username or Password incorrect, please try again or reset your password';
            },
            () => { 
                this.loginLoading = false;
            },
        );

    }

    register() { 

        if(!this.firstNameValue || !this.lastNameValue || !this.registerEmailValue || !this.registerPasswordValue || !this.registerPasswordConfirmValue) {
            this.curModalError = 'Please fill out all fields';
            return false;
        }

        if(this.registerPasswordValue !== this.registerPasswordConfirmValue) {
            this.curModalError = 'Passwords do not match';
            return false;
        }

        this.loginLoading = true;

        let user = {
            first_name: this.firstNameValue,
            last_name: this.lastNameValue,
            username: this.registerEmailValue,
            email: this.registerEmailValue,
            password: this.registerPasswordValue,
            is_staff: false,
            groups: [],
        }

        this.authService.register(user).subscribe(
            data => { 
                if(data['success']) {
                    localStorage.setItem('Username', this.registerEmailValue);
                    this.loadProfile(true);
                } else {
                    this.curModalError = 'User already exists';
                }
            },
            err => {
                this.curModalError = 'Error registering user, please refresh the page and try again';
            },
            () => { 
                this.loginLoading = false;
            },
        );

    }

    loadProfile( registered?: boolean ) {

        let user = {
            username: localStorage.getItem('Username')
        }

        this.authService.getUser(user).subscribe(
            data => { 
                this.loggedInUser = data['user'][0];
                if(registered) {
                    this.switchUserModal('profile')
                    this.registeredLogin();
                }
            },
            err => {
                console.log(err)
            },
            () => { 
                console.log('User retrieved')
            },
        );

    }

    registeredLogin() {

        let user = {
            username: this.registerEmailValue,
            password: this.registerPasswordValue
        }

        this.authService.login(user).subscribe(
            data => { 
                if(data['token']) {
                    localStorage.setItem('Authorization Token', data['token']);
                    this.loginInputEvent = 'login';
                }
            },
            err => {},
            () => {},
        );

    }

    passwordReset() {

        this.loginLoading = true;

        let user = {
            username: this.passwordResetEmailValue,
        }

        this.authService.sendPasswordResetEmail(user).subscribe(
            data => { 
                if(!data['success']) {
                    this.curModalError = 'Username or email not found, please try again';
                } else {
                    this.passwordResetSent = true;
                }
            },
            err => {},
            () => {this.loginLoading = false},
        );

    }

    touchInput( inputName: string ) {

        switch (inputName) {
            case 'email':
              this.emailTouched = true;
              break;
            case 'password':
              this.passwordTouched = true;
              break;
            case 'firstName':
              this.firstNameTouched = true;
              break;
            case 'lastName':
                this.lastNameTouched = true;
                break;
            case 'registerEmail':
                this.registerEmailTouched = true;
                break;
            case 'registerPassword':
                this.registerPasswordTouched = true;
                break;
            case 'registerPasswordConfirm':
                this.registerPasswordConfirmTouched = true;
                break;
            case 'registerPasswordConfirm':
                this.passwordResetEmailTouched = true;
                break;
            default:
              console.log(`Could not determine the input field.`);
          }
        
    }

}
