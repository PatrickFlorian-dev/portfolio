import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
    selector: 'app-modal-content',
    template: `
    <div class="modal-header">
        <h2 class="modal-title text-center">{{ title }}</h2>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body nopadding"> 
    
    <div class="container-fluid">

        <div class="row modal-body-row-cont">

            <div *ngIf="!textOnly" class="col-md-6 nopadding">
                <div class="loading-animation-cont" [ngStyle]="{'display': img1Loaded ? 'none' : null }">
                    <div class="sk-folding-cube">
                        <div class="sk-cube1 sk-cube"></div>
                        <div class="sk-cube2 sk-cube"></div>
                        <div class="sk-cube4 sk-cube"></div>
                        <div class="sk-cube3 sk-cube"></div>
                    </div>
                </div>
                <img class="modal-img img-one-left" src="{{ pageImgOneLink }}" (load)="imageLoaded('img1')">
            </div>
            <div *ngIf="!textOnly" class="col-md-6 nopadding">
                <div class="loading-animation-cont" [ngStyle]="{'display': img2Loaded ? 'none' : null }">
                    <div class="sk-folding-cube">
                        <div class="sk-cube1 sk-cube"></div>
                        <div class="sk-cube2 sk-cube"></div>
                        <div class="sk-cube4 sk-cube"></div>
                        <div class="sk-cube3 sk-cube"></div>
                    </div>
                </div>
                <img class="modal-img img-two-left" src="{{ pageImgTwoLink }}" (load)="imageLoaded('img2')">
            </div>

            <div class="body-text col-md-12">
                <p class="text-center">{{ bodyText }}</p>
            </div>
 
        </div>

    </div>

    </div>
    <div class="modal-footer">
        <div class="left-side">
            <button type="button" class="btn btn-default btn-link" (click)="navigateToUrl()">{{ btnText }}</button>
        </div>
        <div class="divider"></div>
        <div class="right-side">
            <button type="button" class="btn btn-danger btn-link" (click)="activeModal.close('Close click')">Close</button>
        </div>
    </div>
    `,
    styleUrls: ['./modal.component.scss']
})

export class NgbdModalContent {
    @Input() title;
    @Input() link;
    @Input() bodyText;
    @Input() pageImgOneLink;
    @Input() pageImgTwoLink;
    @Input() btnText;
    @Input() textOnly: boolean;
    @Input() externalLink: boolean;

    img1Loaded: boolean = false;
    img2Loaded: boolean = false;

    constructor(public activeModal: NgbActiveModal , private router: Router) {}

    navigateToUrl() {

        if(this.externalLink) {
            window.open(
                this.link,
                '_blank' // <- This is what makes it open in a new window.
            );
        } else {
            this.router.navigateByUrl(this.link)
        }

        this.activeModal.close()

    }

    imageLoaded( img : string ) {
        img === 'img1' ? this.img1Loaded = true : null;
        img === 'img2' ? this.img2Loaded = true : null;
    }

}

@Component({
    selector: 'app-modal-component',
    template: ''
})
export class NgbdModalComponent {
    constructor() {}
}
