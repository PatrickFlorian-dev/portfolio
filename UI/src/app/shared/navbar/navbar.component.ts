import { Component, OnInit, ElementRef, HostListener, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
// import * as $ from 'jquery';
// SEE WHY HERE: https://stackoverflow.com/questions/49821320/bootstrap-w-angular-error-collapse-is-not-a-function
declare var $:any;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;

    stickyFooter: boolean = true;

    userLoggedIn: boolean;

    @Output() openModalOutputEvent = new EventEmitter<string>();

    @Output() toggleSidebarEvent = new EventEmitter<any>();

    @Input() loginInputEvent: string;

    constructor(public location: Location, private element : ElementRef) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        if(localStorage.getItem('Authorization Token')){
            this.userLoggedIn = true;
        } else {
            this.userLoggedIn = false;
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if(!changes['loginInputEvent'].firstChange) {
            if(changes['loginInputEvent'].currentValue === 'login') {
                this.userLoggedIn = true;
            } else {
                this.userLoggedIn = false;
            }
        }
    }

    @HostListener('window:scroll', ['$event']) 
    setHeaderPosition(event) {
      window.pageYOffset >= 800 ? this.stickyFooter = false : this.stickyFooter = true;
    }
    
    scrollToSection(idValue:string) {
        let section = <HTMLElement> document.querySelector(idValue);

        section.scrollIntoView({
            behavior: 'smooth',
        });
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };

    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };

    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    isHome() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    
    isDocumentation() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }

    toggleUserModal( action: string ) {
        this.openModalOutputEvent.emit(action)
    }

    toggleSidebar() {
        this.toggleSidebarEvent.emit(true)
    }

    closeMobileMenu() {
        $('#navbarToggler').removeClass('show');
    }

    logout() {
        localStorage.removeItem('Authorization Token');
        localStorage.removeItem('Username')
        this.userLoggedIn = false;
        // window.location.reload();
    }

}
