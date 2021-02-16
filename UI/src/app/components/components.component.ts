import { Component, OnInit, Renderer } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;
import Swal from 'sweetalert2'

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss']
})

export class ComponentsComponent implements OnInit {
  
    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;

    dot1Hovered : boolean = false;
    dot2Hovered : boolean = false;
    dot3Hovered : boolean = false;

    constructor( private renderer : Renderer) {}
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {

        this.typewriterAnimation();
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }
    }

    fadeInTopCard( dot : string ) {

      let cardElement: string;
      let dotElement: string;
      
      switch (dot) {
        case 'dot1':
          cardElement = '#card-2';
          dotElement = '.pulsating-circle';
          this.dot1Hovered = true;
        break;
        case 'dot2':
          cardElement = '#card-3';
          dotElement = '.pulsating-circle-2';
          this.dot2Hovered = true;
        break;
        case 'dot3':
          cardElement = '#card-4';
          dotElement = '.pulsating-circle-3';
          this.dot3Hovered = true;
        break;
        
        default:
          console.log(`Could not determine the dot hovered over.`);
      }
      
      $(cardElement).fadeIn(1000).animate({
        'bottom': '5%'
        }, {duration: 'slow', queue: false}, function() {
        // Animation complete.
      });

      $(dotElement).fadeOut();

      if ( this.dot1Hovered && this.dot2Hovered && this.dot3Hovered ) {
        $("#play-icon-top-cont").fadeIn();
      }

    }

    fadeToggleElementBasic( elName: string ) {
      $( elName ).fadeToggle( "slow", "linear" );
    }

    showVideo( ) {

        Swal.fire({
          title: '<strong>An audio note from me</strong>',
          icon: 'info',
          html:
            '<iframe width="100%" height="315" src="https://www.youtube.com/embed/mw-WL9EnB3Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          showCloseButton: true,
          showCancelButton: false,
          focusConfirm: false,
          confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Awesome!',
          // confirmButtonAriaLabel: 'Thumbs up, great!',
          // cancelButtonText:
          //   '<i class="fa fa-thumbs-down"></i>',
          // cancelButtonAriaLabel: 'Thumbs down'
        })

    }

    typewriterAnimation() {
        var TxtRotate = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
          };
          
          TxtRotate.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];
          
            if (this.isDeleting) {
              this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
              this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
          
            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
          
            var that = this;
            var delta = 300 - Math.random() * 100;
          
            if (this.isDeleting) { delta /= 2; }
          
            if (!this.isDeleting && this.txt === fullTxt) {
              delta = this.period;
              this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
              this.isDeleting = false;
              this.loopNum++;
              delta = 500;
            }
          
            setTimeout(function() {
              that.tick();
            }, delta);
          };
          
          window.onload = function() {
            var elements = document.getElementsByClassName('txt-rotate');
            for (var i=0; i<elements.length; i++) {
              var toRotate = elements[i].getAttribute('data-rotate');
              var period = elements[i].getAttribute('data-period');
              if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
              }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            // css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
            document.body.appendChild(css);
          };
    }

    scrollDownOneSection() {

      let firstSection = <HTMLElement> document.querySelector("#portfolio-section");

      firstSection.scrollIntoView({
        behavior: 'smooth',
      });

    }

}
