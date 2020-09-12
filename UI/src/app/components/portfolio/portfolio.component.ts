import { Component, OnInit } from '@angular/core';
import { PortfolioBtnsInfo } from 'app/shared/interfaces/portfolio-btns-info';
import { PortfolioImgsInfo } from 'app/shared/interfaces/portfolio-imgs-info';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../modal/modal.component';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {

    currentImageCategory: number = 1;

    btns: PortfolioBtnsInfo[] = [
        {btnID: 0, btnDisplayName: 'All', btnActiveState: true , imgCategory: 1},
        {btnID: 1, btnDisplayName: 'Web', btnActiveState: false , imgCategory: 2},
        {btnID: 2, btnDisplayName: 'Mobile', btnActiveState: false , imgCategory: 3},
        {btnID: 3, btnDisplayName: 'Design', btnActiveState: false , imgCategory: 4},
        {btnID: 4, btnDisplayName: 'Technology', btnActiveState: false , imgCategory: 5},
        {btnID: 5, btnDisplayName: 'Photography', btnActiveState: false , imgCategory: 6},
    ];

    // TODO: map category names from api to data table
    images: PortfolioImgsInfo[] = [
        { portfolioID: 0 , imgSrc: 'assets/img/placeholder1.jpg' , modalImgOneLink: 'assets/img/placeholder1.jpg' , modalImgTwoLink: 'assets/img/placeholder1.jpg', imgTitle: 'Title' , imgCategoryName: 'N/A', imgCategory: 6, link: '#' , show: true , imgDescription: 'This is the body of the modal dynamically loaded!' },
        { portfolioID: 1 , imgSrc: 'assets/img/placeholder2.jpg' , modalImgOneLink: 'assets/img/placeholder2.jpg' , modalImgTwoLink: 'assets/img/placeholder2.jpg', imgTitle: 'Title' , imgCategoryName: 'N/A', imgCategory: 2, link: '#' , show: true , imgDescription: 'This is the body of the modal dynamically loaded!' },
        { portfolioID: 2 , imgSrc: 'assets/img/placeholder3.jpg' , modalImgOneLink: 'assets/img/placeholder3.jpg' , modalImgTwoLink: 'assets/img/placeholder3.jpg', imgTitle: 'Title' , imgCategoryName: 'N/A', imgCategory: 3, link: '#' , show: true , imgDescription: 'This is the body of the modal dynamically loaded!' },
        { portfolioID: 3 , imgSrc: 'assets/img/placeholder4.jpg' , modalImgOneLink: 'assets/img/placeholder4.jpg' , modalImgTwoLink: 'assets/img/placeholder4.jpg', imgTitle: 'Title' , imgCategoryName: 'N/A', imgCategory: 4, link: '#' , show: false , imgDescription: 'This is the body of the modal dynamically loaded!' },
        { portfolioID: 4 , imgSrc: 'assets/img/placeholder3.jpg' , modalImgOneLink: 'assets/img/placeholder1.jpg' , modalImgTwoLink: 'assets/img/placeholder1.jpg', imgTitle: 'Title' , imgCategoryName: 'N/A', imgCategory: 5, link: '#' , show: true , imgDescription: 'This is the body of the modal dynamically loaded!' },
        { portfolioID: 5 , imgSrc: 'assets/img/placeholder4.jpg' , modalImgOneLink: 'assets/img/placeholder2.jpg' , modalImgTwoLink: 'assets/img/placeholder2.jpg', imgTitle: 'Title' , imgCategoryName: 'N/A', imgCategory: 6, link: '#' , show: true , imgDescription: 'This is the body of the modal dynamically loaded!' },
        { portfolioID: 6 , imgSrc: 'assets/img/placeholder2.jpg' , modalImgOneLink: 'assets/img/placeholder3.jpg' , modalImgTwoLink: 'assets/img/placeholder3.jpg', imgTitle: 'Title' , imgCategoryName: 'N/A', imgCategory: 4, link: '#' , show: true , imgDescription: 'This is the body of the modal dynamically loaded!' },
        { portfolioID: 7 , imgSrc: 'assets/img/placeholder1.jpg' , modalImgOneLink: 'assets/img/placeholder4.jpg' , modalImgTwoLink: 'assets/img/placeholder4.jpg', imgTitle: 'Title' , imgCategoryName: 'N/A', imgCategory: 2, link: '#' , show: true , imgDescription: 'This is the body of the modal dynamically loaded!' },
    ];

    constructor(private modalService: NgbModal) {}

    ngOnInit() {
        
    }

    changeBtnActiveState( btnID: number ) {
        this.btns.forEach((element) => { element.btnActiveState = false;});
        this.btns[btnID].btnActiveState = true;
    }

    filterImages(btn: PortfolioBtnsInfo) {
        this.currentImageCategory = btn.imgCategory;
        this.filterImagesArray();
    }

    filterImagesArray() {
        if(this.currentImageCategory == 1) { 
            return this.images 
        } else {
            return this.images.filter((img) => img.imgCategory === this.currentImageCategory);
        }
    }

    viewAllProjects() {
        // TODO: Naviagate to all projects page once built
    }

    openModal(img: PortfolioImgsInfo) {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.textOnly = false;
        modalRef.componentInstance.title = img.imgTitle;
        modalRef.componentInstance.link = img.link;
        modalRef.componentInstance.bodyText = img.imgDescription;
        modalRef.componentInstance.pageImgOneLink = img.modalImgOneLink;
        modalRef.componentInstance.pageImgTwoLink = img.modalImgTwoLink;
        modalRef.componentInstance.btnText = 'Visit page';
    }

}
