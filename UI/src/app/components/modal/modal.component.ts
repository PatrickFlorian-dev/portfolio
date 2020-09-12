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
        <div class="row">
            <div *ngIf="!textOnly" class="col-md-6 nopadding">
                <img class="modal-img img-one-left" src="{{ pageImgOneLink }}">
            </div>
            <div *ngIf="!textOnly" class="col-md-6 nopadding">
                <img class="modal-img img-two-left" src="{{ pageImgTwoLink }}">
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

    constructor(public activeModal: NgbActiveModal , private router: Router) {}

    navigateToUrl() {
        this.router.navigateByUrl(this.link)
        this.activeModal.close()
    }

}

@Component({
    selector: 'app-modal-component',
    template: ''
})
export class NgbdModalComponent {
    constructor() {}
}
