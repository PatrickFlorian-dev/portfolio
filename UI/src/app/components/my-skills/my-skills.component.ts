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
    curSelectedBodyText: string = 'Pick a card, any card 🤠';

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
            active: false,
            descText: `HTML was my first language! Computer science class of 05 I learned that you could manipulate the browser through developer tools and I think that same night I must of slept probably 2 hours in total tinkering with anything I could get my hands on to show off to my classmates the next day.`
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
            active: false,
            descText: `After my first day of computer science class and fidling around with the DOM to manipulate HTML, I thought ... how can I make this look different. The rest as they say is history. This of course evolved to more advanced concepts like CSS3, LESS, & SASS.`
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
            active: false,
            descText: `Ironically around the same time in 06 after that first computer science class one of my classmates showed me how to disable Javascript on a Youtube video to bypass the advertisements and all I thought was "Woah! how cool is that?" Devling in Javascript so long there honestly isn't much I can't do with it.`
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
            active: false,
            descText: `A little towards the end of high school our computer science teacher introduced us to something called Linux. I only thought there was only Windows and Mac, I didn't know it was a 3 party system. Linux is by far my favorite because it is open source but I still love and am adept at Windows & Mac.`
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
            active: false,
            descText: `PHP like many beginners who didn't start off with python was my first backend language. My first web development job utlized it heavily and I very much enjoyed it. PHP is powerful and it doesn't hold your hand as much as say ASP.NET would so it allows for a strong foundation in learning backend programming.`
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
            active: false,
            descText: `ASP.NET was a new one for me at my 3rd development job but it didn't slow me down at all in learning it. As a popular framework for backend web technologies it is also one of my preferred backends for the site I build, and I am now very familiar with all of it's in's and out's.`
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
            active: false,
            descText: `I just have to say I LOVE LOVE LOVE 😍 Angular 2. About 70% of my websites I build utilize Angular 2 with the other 30% being about half React and half a mix of Vue and Vanilla JS mixed in with some Jquery. Angular has become second nature to me and I plan to spread the joys of Angular to other's who aren't using it. `
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
            active: false,
            descText: `So I learned Python in highschool and collge classes and while it was cool to use it, most of my real world experience never really used Python. That changed once I got my hand on the Django framework a couple of years ago and I must say I am thoroughly impressed. Python with Django is a very powerful tool. I also use Python alone for my non web based projects.`
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
            active: false,
            descText: `I learned two things early on that has helped my career tremendously! First, plan ahead and try to envision every part of your plan. Second, always expect the unexpected and be ready for it! Wether that's an old browser that won't support your code and you having to program a work around to a client changing project scopes, I am always ready for a wrench to be thrown in.`
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
            active: false,
            descText: `Many times I've been presented with an idea and told by that person "Make this a reality for me". That requires so much effort to convey those thoughts into a tangible and functional application. In coherence with that I had to pickup skills that aren't only code based like Photoshop and CMS/CRM's.`
        },
        {
            id: 3,
            title: 'Communication',
            subTitle: 'Teamwork, Conveying Ideas, Active Listening',
            subTitle2: '85%',
            icon: 'fas fa-comment-alt',
            color: 'elec-blue',
            prctAmt: 85,
            prctRatingTxt: 'Amazing',
            prctAmtBar: '85%',
            xl: true,
            active: false,
            descText: `You've probably heard the expression "You hear what I say but you are not listening". Truer words have never been spoken and that is especialy important working in teams. But that's only a part of it, you also have to know how to properly convey your thoughts and ideas accordingly.`
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
            active: false,
            descText: `One thing I was never thought in school was how things in the real world work. Like business taxes, ADA compliancy, HIPPA Compliancy, and W3 standards to name a few. Just seeing how small and larger businesses operate has thought me so much.`
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
        this.curSelectedBodyText = card.descText;

        $(".editor-indicator").show();

    }

}