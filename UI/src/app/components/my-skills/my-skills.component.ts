import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Swal from 'sweetalert2';

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
    cardsToRender = [
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

    cardsToRenderXL = [
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

    modalHtml = 
    '<div class="skills">'+
    '  <div class="charts">'+
    '    <div class="chart chart--dev">'+
    '      <span class="chart__title">Development</span>'+
    '      <ul class="chart--horiz">'+
    '        <li class="chart__bar" data-skill="95">'+
    '          <span class="chart__label">'+
    '            HTML • HTML 5 • XHTML • XML'+
    '          </span>'+
    '        </li>'+
    '        <li class="chart__bar" data-skill="95">'+
    '          <span class="chart__label">'+
    '            CSS • CSS3 • LESS • SCSS'+
    '          </span>'+
    '        </li>'+
    '        <li class="chart__bar" data-skill="95">'+
    '          <span class="chart__label">'+
    '            JavaScript • Typescript • jQuery'+
    '          </span>'+
    '        </li>'+
    '        <li class="chart__bar" data-skill="95">'+
    '          <span class="chart__label">'+
    '            Angular 2 / React'+
    '          </span>'+
    '        </li>'+
    '        <li class="chart__bar" data-skill="90">'+
    '          <span class="chart__label">'+
    '            C • C+'+
    '          </span>'+
    '        </li>'+
    '        <li class="chart__bar" data-skill="90">'+
    '          <span class="chart__label">'+
    '            ASP NET ( MVC ) • Web API • ASP NET CORE'+
    '          </span>'+
    '        </li>'+
    '        <li class="chart__bar" data-skill="90">'+
    '          <span class="chart__label">'+
    '            SQL • SQLite • NoSql • PostGre • MongoDB'+
    '          </span>'+
    '        </li>'+
    '        <li class="chart__bar" data-skill="90">'+
    '          <span class="chart__label">'+
    '            PHP'+
    '          </span>'+
    '        </li>'+
    '        <li class="chart__bar" data-skill="90">'+
    '          <span class="chart__label">'+
    '            Laravel • Symfony • Yii 2 • Codeigniter'+
    '          </span>'+
    '        </li>'+
    '        <li class="chart__bar" data-skill="95">'+
    '          <span class="chart__label">'+
    '            Node JS • Express • Koa'+
    '          </span>'+
    '        </li>'+
    '        <li class="chart__bar" data-skill="80">'+
    '          <span class="chart__label">'+
    '            Python'+
    '          </span>'+
    '        </li>'+
    '        <li class="chart__bar" data-skill="80">'+
    '          <span class="chart__label">'+
    '            Django • Django REST API '+
    '          </span>'+
    '        </li>'+
    '        <li class="chart__bar" data-skill="60">'+
    '          <span class="chart__label">'+
    '            Ruby On Rails'+
    '          </span>'+
    '        </li>'+
    '      </ul>'+
    '    </div>'+
    '    '+
    '    <div class="chart chart--prod">'+
    `      <span class="chart__title">Non Development & Rest API's & CRM's / CMS's</span>`+
    '      <ul class="chart--horiz">'+
    '      <li class="chart__bar" data-skill="95">'+
    '        <span class="chart__label">'+
    '          Drupal • Wordpress • Wix '+
    '        </span>'+
    '      </li>'+
    '      <li class="chart__bar" data-skill="95">'+
    '        <span class="chart__label">'+
    '          Git • Github • Bitbucket • Sourcetree'+
    '        </span>'+
    '      </li>'+
    '      <li class="chart__bar" data-skill="95">'+
    '        <span class="chart__label">'+
    '          Docker • Heroku'+
    '        </span>'+
    '      </li>'+
    '      <li class="chart__bar" data-skill="95">'+
    '        <span class="chart__label">'+
    '          Azure Cloud Services • IIS'+
    '        </span>'+
    '      </li>'+
    '      <li class="chart__bar" data-skill="95">'+
    '        <span class="chart__label">'+
    '          AWS Services ( EC2 • S3, etc )'+
    '        </span>'+
    '      </li>'+
    '      <li class="chart__bar" data-skill="95">'+
    '        <span class="chart__label">'+
    '          Acquia'+
    '        </span>'+
    '      </li>'+
    '      <li class="chart__bar" data-skill="95">'+
    '        <span class="chart__label">'+
    '          Salesforce'+
    '        </span>'+
    '      </li>'+
    '      <li class="chart__bar" data-skill="95">'+
    '        <span class="chart__label">'+
    '          Sharepoint'+
    '        </span>'+
    '      </li>'+
    '      <li class="chart__bar" data-skill="90">'+
    '        <span class="chart__label">'+
    '          Microsoft Office (Macros • MS Office API) • Microsoft Graph'+
    '        </span>'+
    '      </li>'+
    '    </ul>'+
    '    </div>'+
    '    '+
    '    <div class="chart chart--design">'+
    '      <span class="chart__title">Design and other skills</span>'+
    '      <ul class="chart--horiz">'+
    '      <li class="chart__bar" data-skill="95">'+
    '        <span class="chart__label">'+
    '          UI/UX Design • Website planning / wireframing'+
    '        </span>'+
    '      </li>'+
    '      <li class="chart__bar" data-skill="90">'+
    '        <span class="chart__label">'+
    '          Project management • Documentation'+
    '        </span>'+
    '      </li>'+
    '      <li class="chart__bar" data-skill="80">'+
    '        <span class="chart__label">'+
    '          Photoshop'+
    '        </span>'+
    '      </li>'+
    '      <li class="chart__bar" data-skill="65">'+
    '        <span class="chart__label">'+
    '          Illustrator'+
    '        </span>'+
    '      </li>'+
    '      <li class="chart__bar" data-skill="50">'+
    '        <span class="chart__label">'+
    '          Auto Cad • Blender'+
    '        </span>'+
    '      </li>'+
    '    </ul>'+
    '    </div>'+
    '  </div>'+
    '</div>'+
    '<style>'+
    '.skills {'+
    '  width: 80%;'+
    '  max-width: 960px;'+
    '  height: 720px;'+
    '  margin: auto;'+
    '  position: relative;'+
    '}'+
    ''+
    '.lines {'+
    '  height: 100%;'+
    '  position: relative;'+
    '}'+
    '.lines .line {'+
    '  height: inherit;'+
    '  width: 2px;'+
    '  position: absolute;'+
    '  background: rgba(238, 238, 238, 0.6);'+
    '}'+
    '.lines .line.l--0 {'+
    '  left: 0;'+
    '}'+
    '.lines .line.l--25 {'+
    '  left: 25%;'+
    '}'+
    '.lines .line.l--50 {'+
    '  left: 50%;'+
    '}'+
    '.lines .line.l--75 {'+
    '  left: 75%;'+
    '}'+
    '.lines .line.l--100 {'+
    '  left: calc(100% - 1px);'+
    '}'+
    '.lines .line .line__label {'+
    '  display: block;'+
    '  width: 100px;'+
    '  text-align: center;'+
    '  position: absolute;'+
    '  bottom: -20px;'+
    '  right: -50px;'+
    '}'+
    '.lines .line .line__label.title {'+
    '  text-transform: uppercase;'+
    '  font-weight: bold;'+
    '}'+
    ''+
    '.charts {'+
    '  width: 100%;'+
    '  height: 100%;'+
    '  position: absolute;'+
    '  top: 0;'+
    '  left: 0;'+
    '  z-index: 10;'+
    '}'+
    ''+
    '.chart {'+
    '  margin: 30px 0 0;'+
    '}'+
    '.chart:first-child {'+
    '  margin: 0;'+
    '}'+
    ''+
    '.chart__title {'+
    '  display: block;'+
    '  margin: 0 0 10px;'+
    '  font-weight: bold;'+
    '  opacity: 0;'+
    '  animation: 1s anim-lightspeed-in ease forwards;'+
    '}'+
    '.chart--prod .chart__title {'+
    '  animation-delay: 3s;'+
    '}'+
    '.chart--design .chart__title {'+
    '  animation-delay: 4.2s;'+
    '}'+
    ''+
    '.chart--horiz {'+
    '  overflow: hidden;'+
    '}'+
    ''+
    '.chart__bar {'+
    '  height: 30px;'+
    '  margin-bottom: 10px;'+
    '  background: linear-gradient(to left, #48dbfb, #2e86de);'+
    '  border-top-right-radius: 4px;'+
    '  border-bottom-right-radius: 4px;'+
    '  opacity: 0;'+
    '  animation: 1s anim-lightspeed-in ease forwards;'+
    '}'+
    '.chart--dev .chart__bar:nth-of-type(13) {'+
    '  animation-delay: 3.1s;'+
    '}'+
    '.chart--dev .chart__bar:nth-of-type(12) {'+
    '  animation-delay: 2.9s;'+
    '}'+
    '.chart--dev .chart__bar:nth-of-type(11) {'+
    '  animation-delay: 2.7s;'+
    '}'+
    '.chart--dev .chart__bar:nth-of-type(10) {'+
    '  animation-delay: 2.5s;'+
    '}'+
    '.chart--dev .chart__bar:nth-of-type(9) {'+
    '  animation-delay: 2.3s;'+
    '}'+
    '.chart--dev .chart__bar:nth-of-type(8) {'+
    '  animation-delay: 2.1s;'+
    '}'+
    '.chart--dev .chart__bar:nth-of-type(7) {'+
    '  animation-delay: 1.9s;'+
    '}'+
    '.chart--dev .chart__bar:nth-of-type(6) {'+
    '  animation-delay: 1.7s;'+
    '}'+
    '.chart--dev .chart__bar:nth-of-type(5) {'+
    '  animation-delay: 1.5s;'+
    '}'+
    '.chart--dev .chart__bar:nth-of-type(4) {'+
    '  animation-delay: 1.3s;'+
    '}'+
    '.chart--dev .chart__bar:nth-of-type(3) {'+
    '  animation-delay: 1.1s;'+
    '}'+
    '.chart--dev .chart__bar:nth-of-type(2) {'+
    '  animation-delay: 0.9s;'+
    '}'+
    '.chart--dev .chart__bar:nth-of-type(1) {'+
    '  animation-delay: 0.7s;'+
    '}'+
    '.chart--prod .chart__bar:nth-of-type(11) {'+
    '  animation-delay: 5.7s;'+
    '}'+
    '.chart--prod .chart__bar:nth-of-type(10) {'+
    '  animation-delay: 5.5s;'+
    '}'+
    '.chart--prod .chart__bar:nth-of-type(9) {'+
    '  animation-delay: 5.3s;'+
    '}'+
    '.chart--prod .chart__bar:nth-of-type(8) {'+
    '  animation-delay: 5.1s;'+
    '}'+
    '.chart--prod .chart__bar:nth-of-type(7) {'+
    '  animation-delay: 4.9s;'+
    '}'+
    '.chart--prod .chart__bar:nth-of-type(6) {'+
    '  animation-delay: 4.7s;'+
    '}'+
    '.chart--prod .chart__bar:nth-of-type(5) {'+
    '  animation-delay: 4.5s;'+
    '}'+
    '.chart--prod .chart__bar:nth-of-type(4) {'+
    '  animation-delay: 4.3s;'+
    '}'+
    '.chart--prod .chart__bar:nth-of-type(3) {'+
    '  animation-delay: 4.1s;'+
    '}'+
    '.chart--prod .chart__bar:nth-of-type(2) {'+
    '  animation-delay: 3.9s;'+
    '}'+
    '.chart--prod .chart__bar:nth-of-type(1) {'+
    '  animation-delay: 3.7s;'+
    '}'+
    '.chart--design .chart__bar:nth-of-type(3) {'+
    '  animation-delay: 6.3s;'+
    '}'+
    '.chart--design .chart__bar:nth-of-type(2) {'+
    '  animation-delay: 6.1s;'+
    '}'+
    '.chart--design .chart__bar:nth-of-type(1) {'+
    '  animation-delay: 5.9s;'+
    '}'+
    '.chart__bar[data-skill="35"] {'+
    '  width: 35%;'+
    '}'+
    '.chart__bar[data-skill="40"] {'+
    '  width: 40%;'+
    '}'+
    '.chart__bar[data-skill="45"] {'+
    '  width: 45%;'+
    '}'+
    '.chart__bar[data-skill="50"] {'+
    '  width: 50%;'+
    '}'+
    '.chart__bar[data-skill="55"] {'+
    '  width: 55%;'+
    '}'+
    '.chart__bar[data-skill="60"] {'+
    '  width: 60%;'+
    '}'+
    '.chart__bar[data-skill="65"] {'+
    '  width: 65%;'+
    '}'+
    '.chart__bar[data-skill="70"] {'+
    '  width: 70%;'+
    '}'+
    '.chart__bar[data-skill="75"] {'+
    '  width: 75%;'+
    '}'+
    '.chart__bar[data-skill="80"] {'+
    '  width: 80%;'+
    '}'+
    '.chart__bar[data-skill="85"] {'+
    '  width: 85%;'+
    '}'+
    '.chart__bar[data-skill="90"] {'+
    '  width: 90%;'+
    '}'+
    '.chart__bar[data-skill="95"] {'+
    '  width: 95%;'+
    '}'+
    '.chart__label {'+
    '  padding-left: 10px;'+
    '  line-height: 30px;'+
    '  color: white;'+
    '}'+
    '@keyframes anim-lightspeed-in {'+
    '  0% {'+
    '    transform: translateX(-200%);'+
    '    opacity: 1;'+
    '  }'+
    '  100% {'+
    '    transform: translateX(0);'+
    '    opacity: 1;'+
    '  }'+
    '}'+
    '.swal2-actions {' +
    'padding-bottom: 10px;' +
    ' padding-top: 454px;' +
    '}' +
    '</style>';

    showSkillsListModal( ) {

        Swal.fire({
            title: '<strong>HTML <u>example</u></strong>',
            icon: 'info',
            html: this.modalHtml
              ,
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
              '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down'
        })

    }

    /*
    *
    *
    * Please note I did this on purpose, I could of combined the above arrays
    * together but wanted to fit in as much code as I can :)
    * 
    * */
    changePercentage(card) {

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