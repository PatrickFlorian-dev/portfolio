import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

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
            <div class="col-md-6 nopadding">
                <img class="modal-img img-one-left" src="{{ pageImgOneLink }}">
            </div>
            <div class="col-md-6 nopadding">
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
            <button type="button" class="btn btn-default btn-link" (click)="navigateToUrl()">Visit Page</button>
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

    constructor(public activeModal: NgbActiveModal) {}

    navigateToUrl() {
        console.log('Navigate to link passed in here!' , this.link)
    }

}

@Component({
    selector: 'app-modal-component',
    template: ''
})
export class NgbdModalComponent {
    constructor() {}
}
