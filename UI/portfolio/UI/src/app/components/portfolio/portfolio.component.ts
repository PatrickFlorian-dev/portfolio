import { Component, OnInit } from '@angular/core';
import { PortfolioBtnsInfo } from 'app/shared/interfaces/portfolio-btns-info';
import { PortfolioImgsInfo } from 'app/shared/interfaces/portfolio-imgs-info';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {

    btns: PortfolioBtnsInfo[] = [
        {btnID: 0, btnDisplayName: 'All', btnActiveState: true},
        {btnID: 1, btnDisplayName: 'Web', btnActiveState: false},
        {btnID: 2, btnDisplayName: 'Mobile', btnActiveState: false},
        {btnID: 3, btnDisplayName: 'Design', btnActiveState: false},
        {btnID: 4, btnDisplayName: 'Technology', btnActiveState: false},
        {btnID: 5, btnDisplayName: 'Photography', btnActiveState: false},
    ];

    images: PortfolioImgsInfo[] = [
        { portfolioID: 0 , imgSrc: 'assets/img/placeholder1.jpg' },
        { portfolioID: 1 , imgSrc: 'assets/img/placeholder2.jpg' },
        { portfolioID: 2 , imgSrc: 'assets/img/placeholder3.jpg' },
        { portfolioID: 3 , imgSrc: 'assets/img/placeholder4.jpg' },
        { portfolioID: 4 , imgSrc: 'assets/img/placeholder3.jpg' },
        { portfolioID: 5 , imgSrc: 'assets/img/placeholder4.jpg' },
        { portfolioID: 6 , imgSrc: 'assets/img/placeholder2.jpg' },
        { portfolioID: 7 , imgSrc: 'assets/img/placeholder1.jpg' },
    ];

    constructor() {}

    ngOnInit() {
        
    }

    changeBtnActiveState( btnID: number ) {
        this.btns.forEach((element) => { element.btnActiveState = false;});
        this.btns[btnID].btnActiveState = true;
    }

}
