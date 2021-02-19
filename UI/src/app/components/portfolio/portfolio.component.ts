import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../modal/modal.component';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {

    currentImageCategory: number = 1;

    btns = [
        {btnID: 0, btnDisplayName: 'All', btnActiveState: true , imgCategory: 1},
        {btnID: 1, btnDisplayName: 'Career', btnActiveState: false , imgCategory: 2},
        {btnID: 2, btnDisplayName: 'Freelance', btnActiveState: false , imgCategory: 3},
        {btnID: 3, btnDisplayName: 'Templating', btnActiveState: false , imgCategory: 4},
        {btnID: 4, btnDisplayName: 'IOS / Android', btnActiveState: false , imgCategory: 5},
        // {btnID: 5, btnDisplayName: 'Photography', btnActiveState: false , imgCategory: 6},
    ];

    // TODO: map category names from api to data table
    images = [
        { portfolioID: 0 , imgSrc: 'assets/img/bgs/tgh-bg-1.png' , modalImgOneLink: 'assets/img/bgs/tgh-bg-2.png' , modalImgTwoLink: 'assets/img/bgs/tgh-bg-3.png', imgTitle: 'Tampa General Hospital' , imgCategoryName: 'Career', imgCategory: 2, link: 'https://www.tgh.org/' , externalLink: true , show: true , imgDescription: `I've been with Tampa General now for about a little over two years and I absolutely love the challenge of working on and managing multiple (15+) websites. There is never a dull day and never have a lack of work. Not only is it a face paced environment but it also very challenging and I learn something new almost everyday!` },
        { portfolioID: 1 , imgSrc: 'assets/img/bgs/tbt-bg-1.png' , modalImgOneLink: 'assets/img/bgs/tbt-bg-2.png' , modalImgTwoLink: 'assets/img/bgs/tbt-bg-3.png', imgTitle: 'Tampa Bay Times' , imgCategoryName: 'Career', imgCategory: 2, link: 'https://www.tampabay.com/' , externalLink: true, show: true , imgDescription: `The Tampa Bay Times are a phenomenal newspaper publisher right on par with the New York Times. They already have a team of developers but whenever they ramp up and need some extra help they'll solicit me as a temporary independent contractor.` },
        { portfolioID: 2 , imgSrc: 'assets/img/bgs/blog-bg-1.png' , modalImgOneLink: 'assets/img/bgs/blog-bg-2.png' , modalImgTwoLink: 'assets/img/bgs/blog-bg-3.png', imgTitle: 'PBJ' , imgCategoryName: 'Freelance', imgCategory: 3, link: '/portfolio-blog' , externalLink: true, show: true , imgDescription: `In my free time I love writing articles and how-to's, so I created PBJ! Patrick's Blogs & Jams. A site where you can read up on some cool blogs and check out some new music.` },
        { portfolioID: 3 , imgSrc: 'assets/img/bgs/spumoni-bg-1.png' , modalImgOneLink: 'assets/img/bgs/spumoni-bg-2.png' , modalImgTwoLink: 'assets/img/bgs/spumoni-bg-3.png', imgTitle: 'Spumoni Gardens' , imgCategoryName: 'Freelance', imgCategory: 3, link: 'https://spumonigardens.com/' , externalLink: true, show: false , imgDescription: `Located in my hometown of Brooklyn, New York , Spumoni's is one of the best Italian resturants in town and I can personally attest to it! Try the chicken parmesan or the stuffed jumbo ravoli.` },
        { portfolioID: 4 , imgSrc: 'assets/img/bgs/admin-bg-1-min.jpg' , modalImgOneLink: 'assets/img/bgs/admin-bg-2-min.jpg' , modalImgTwoLink: 'assets/img/bgs/admin-bg-3-min.jpg', imgTitle: 'My Admin Site' , imgCategoryName: 'Freelance', imgCategory: 3, link: '/admin-demo' , externalLink: true, show: true , imgDescription: `This is one of the admin templates I quickly whipped up recently for a client. Of course the real thing is way more extensive but this is just an example of how I can rapidly whip up a website.` },
        { portfolioID: 5 , imgSrc: 'assets/img/bgs/mountains-bg-1.png' , modalImgOneLink: 'assets/img/bgs/mountains-bg-2.png' , modalImgTwoLink: 'assets/img/bgs/mountains-bg-3.png', imgTitle: 'Theme Forest Project' , imgCategoryName: 'Career', imgCategory: 6, link: '/explore-more' , externalLink: true, show: true , imgDescription: 'An innovative theme I built to distribute on Theme Forest to show off my design skills. This is the basic version I use just to showcase here, there is the more advanced template on Theme Forest I used a while back.' },
        { portfolioID: 6 , imgSrc: 'assets/img/placeholder2.jpg' , modalImgOneLink: 'assets/img/placeholder3.jpg' , modalImgTwoLink: 'assets/img/placeholder3.jpg', imgTitle: 'Title' , imgCategoryName: 'N/A', imgCategory: 4, link: '#' , externalLink: true, show: true , imgDescription: 'This is the body of the modal dynamically loaded!' },
        { portfolioID: 7 , imgSrc: 'assets/img/placeholder1.jpg' , modalImgOneLink: 'assets/img/placeholder4.jpg' , modalImgTwoLink: 'assets/img/placeholder4.jpg', imgTitle: 'Title' , imgCategoryName: 'N/A', imgCategory: 2, link: '#' , externalLink: true, show: true , imgDescription: 'This is the body of the modal dynamically loaded!' },
    ];

    constructor(private modalService: NgbModal) {}

    ngOnInit() {
        
    }

    changeBtnActiveState( btnID: number ) {
        this.btns.forEach((element) => { element.btnActiveState = false;});
        this.btns[btnID].btnActiveState = true;
    }

    filterImages(btn) {
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

    openModal(img) {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.textOnly = false;
        modalRef.componentInstance.title = img.imgTitle;
        modalRef.componentInstance.link = img.link;
        modalRef.componentInstance.bodyText = img.imgDescription;
        modalRef.componentInstance.pageImgOneLink = img.modalImgOneLink;
        modalRef.componentInstance.pageImgTwoLink = img.modalImgTwoLink;
        modalRef.componentInstance.btnText = 'Visit page';
        modalRef.componentInstance.externalLink = img.externalLink;
    }

}
