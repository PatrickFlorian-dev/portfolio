import { Component, OnInit } from '@angular/core';
import { SkillsButtonsInfo } from 'app/shared/interfaces/skills-buttons-info';
import * as $ from 'jquery';

@Component({
    selector: 'app-my-skills',
    templateUrl: './my-skills.component.html',
    styleUrls: ['./my-skills.component.scss']
})

export class MySkillsComponent implements OnInit {

    graphAmount: number = 65;
    curPercentText: string = null;

    // TODO: Change this to api call later
    cardsToRender: SkillsButtonsInfo[] = [
        {
            id: 1,
            title: 'HTML/HTML5',
            subTitle: '10+ Years',
            icon: 'fab fa-html5',
            color: 'elec-blue',
            prctAmt: 100,
            prctRatingTxt: 'Jedi',
            prctAmtBar: '100%',
            xl: false,
            active: false
        },
        {
            id: 2,
            title: 'CSS3/LESS/SASS',
            subTitle: '10+ Years',
            icon: 'fab fa-css3-alt',
            color: 'elec-blue',
            prctAmt: 100,
            prctRatingTxt: 'Jedi',
            prctAmtBar: '100%',
            xl: false,
            active: false
        },
        {
            id: 3,
            title: 'Javscript',
            subTitle: '10+ Years',
            icon: 'fab fa-js-square',
            color: 'elec-blue',
            prctAmt: 95,
            prctRatingTxt: 'Jedi',
            prctAmtBar: '95%',
            xl: false,
            active: false
        },
        {
            id: 4,
            title: 'Bash/CMD',
            subTitle: '10+ Years',
            icon: 'fas fa-terminal',
            color: 'elec-blue',
            prctAmt: 85,
            prctRatingTxt: 'Amazing',
            prctAmtBar: '85%',
            xl: false,
            active: false
        },
        {
            id: 5,
            title: 'PHP/SQL',
            subTitle: '8 Years',
            icon: 'fab fa-php',
            color: 'elec-blue',
            prctAmt: 90,
            prctRatingTxt: 'Amazing',
            prctAmtBar: '90%',
            xl: false,
            active: false
        },
        {
            id: 6,
            title: 'C# / .NET',
            subTitle: '8 Years',
            icon: 'fas fa-code',
            color: 'elec-blue',
            prctAmt: 85,
            prctRatingTxt: 'Experienced',
            prctAmtBar: '85%',
            xl: false,
            active: false
        },
        {
            id: 7,
            title: 'Angular/TS',
            subTitle: '6 Years',
            icon: 'fab fa-angular',
            color: 'elec-blue',
            prctAmt: 95,
            prctRatingTxt: 'Amazing',
            prctAmtBar: '95%',
            xl: false,
            active: false
        },
        {
            id: 8,
            title: 'Python',
            subTitle: '5 Years',
            icon: 'fab fa-python',
            color: 'elec-blue',
            prctAmt: 65,
            prctRatingTxt: 'Experienced',
            prctAmtBar: '65%',
            xl: false,
            active: false
        },
    ];

    cardsToRenderXL: SkillsButtonsInfo[] = [
        {
            id: 1,
            title: 'Strategic Skills',
            subTitle: 'Analytical, Adaptability, Critical Thinking',
            subTitle2: '90%',
            icon: 'fas fa-chess',
            color: 'elec-blue',
            prctAmt: 90,
            prctRatingTxt: 'Amazing',
            prctAmtBar: '90%',
            xl: true,
            active: false
        },
        {
            id: 2,
            title: 'Creative',
            subTitle: 'SWOT Analysis, Photoshop, Thinking out of the box',
            subTitle2: '85%',
            icon: 'fas fa-palette',
            color: 'elec-blue',
            prctAmt: 85,
            prctRatingTxt: 'Amazing',
            prctAmtBar: '85%',
            xl: true,
            active: false
        },
        {
            id: 3,
            title: 'Communication',
            subTitle: 'Teamwork, Negotiation, Active Listening',
            subTitle2: '85%',
            icon: 'fas fa-comment-alt',
            color: 'elec-blue',
            prctAmt: 85,
            prctRatingTxt: 'Amazing',
            prctAmtBar: '85%',
            xl: true,
            active: false
        },
        {
            id: 4,
            title: 'Business Development',
            subTitle: 'Project Management, Startups, Marketing',
            subTitle2: '70%',
            icon: 'fab fa-black-tie',
            color: 'elec-blue',
            prctAmt: 70,
            prctRatingTxt: 'Experienced',
            prctAmtBar: '70%',
            xl: true,
            active: false
        },
    ];

    constructor() {}

    ngOnInit() {
        
    }

    /*
    *
    *
    * Please note I did this on purpose, I could of combined the above arrays
    * together but wanted to fit in as much code as I can :)
    * 
    * */
    changePercentage(card:SkillsButtonsInfo) {

        // This changes everything
        "use strict";

        var animation : any = document.getElementById("dash");
        if(animation) { animation.beginElement() };

        // To use arrow function below
        var self = this;

        this.cardsToRender.forEach((element) => {
            element.active = false;
        });

        this.cardsToRenderXL.forEach((element) => {
            element.active = false;
        });

        if(!card.xl) {
            var selectedIndex: number = null;

            this.cardsToRender.forEach(function(value, index) {
                if (value.id === card.id){
                    selectedIndex = index
                }
            });
    
            this.cardsToRender[selectedIndex].active = true;
        } else {
            const foundIndex: number = this.cardsToRenderXL.findIndex(x => x.id === card.id);
            this.cardsToRenderXL[foundIndex].active = true;
        }

        this.graphAmount = card.prctAmt;
        this.curPercentText = card.prctRatingTxt;

        $(".editor-indicator").show();

    }

}