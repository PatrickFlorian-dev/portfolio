import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-content',
    template: `
    <div class="modal-header">
        <h5 class="modal-title text-center">{{ title }}</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body"> 
    
        <p>{{ bodyText }}</p>

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
    `
})

export class NgbdModalContent {
    @Input() title;
    @Input() link;
    @Input() bodyText;

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
