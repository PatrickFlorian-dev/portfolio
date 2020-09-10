import { Component, OnInit, Input, ElementRef } from '@angular/core';
// import * as L from 'leaflet';
// import { tileLayer } from 'leaflet';
// import { latLng } from 'leaflet';
// import { circle } from 'leaflet';
// import { polygon } from 'leaflet';
import * as $ from "jquery";
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ContactFormInfo } from 'app/shared/interfaces/contact-form-info';
import { DataService } from 'app/shared/services/data.service';

@Component({
    selector: 'app-contact-me',
    templateUrl: './contact-me.component.html',
    styleUrls: ['./contact-me.component.scss']
})

export class ContactMeComponent implements OnInit {

    // Leaflet

    // @Input() mapOptions: L.MapOptions= {
    //     layers:[tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //       opacity: 0.7,
    //       maxZoom: 19,
    //       detectRetina: true,
    //     //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     })],
    //     zoom:10,
    //     center:latLng(27.950928, -82.459464)
    // };

    // layersControl = {
    //     baseLayers: {
    //         'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
    //         'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    //     },
    //     overlays: {
    //         'Big Circle': circle([ 46.95, -122 ], { radius: 5000 }),
    //         'Big Square': polygon([[ 46.8, -121.55 ], [ 46.9, -121.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]])
    //     }
    // }
    
    submitted: boolean = false;

    submittedWithinLast24Hours: boolean = false;

    nameValue: string;
    nameTouched: boolean = false;
    emailValue: string;
    emailTouched: boolean = false;
    phoneValue: string;
    phoneTouched: boolean = false;
    messageValue: string;

    constructor(
      private dataService: DataService,
      private el: ElementRef,
      ) {
        this.nameValue = '';
        this.emailValue = '';
        this.phoneValue = '';
        this.messageValue = '';
    }

    email_check( email ) {    
      var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      return (email != '' && email != 'undefined' && regex.test(email)); 
    }

    touchInput( inputName: string ) {

      switch (inputName) {
          case 'name':
            this.nameTouched = true;
            if(this.nameValue.length == 0) {
              document.getElementById("name-label").innerHTML = "Name is required"
            } else {
              document.getElementById("name-label").innerHTML = "Name"
            }
            break;
          case 'email':
            this.emailTouched = true;

            if(this.emailValue.length == 0) {
              document.getElementById("email-label").innerHTML = "Email is required"
            } else {
              if(this.email_check(this.emailValue)) {
                document.getElementById("email-label").innerHTML = "Email"
              } else {
                document.getElementById("email-label").innerHTML = "Email is invalid"
              }
            }

            break;
          case 'phone':
            this.phoneTouched = true;
            break;
          default:
            console.log(`Could not determine the input field.`);
      }
        
    }

    ngOnInit() {

      // TESTING ONLY
      // this.authService.sendGetRequest().subscribe(
      //   data => { console.log(data);},
      //   err => console.log(err),
      //   () => console.log('done loading hellow world test'),
      // );

    }

    onSubmit() { 

      const contactInformation : ContactFormInfo = {
        "name": this.nameValue,
        "email": this.emailValue,
        "phone": this.phoneValue,
        "message": this.messageValue,
      }

      this.dataService.submitContactForm( contactInformation ).subscribe(
        data => { 
          
          let _data: any = data;
          
          if(_data.success) {

            this.submittedWithinLast24Hours = false;

            $( ".input-effect , .greetings-cont , .submit-btn-container" ).fadeOut( "linear", function() {
              setTimeout(()=>{
                $(".thank-you-cont").fadeIn(400 , "linear")
              }, 800);
            });

            this.submitted = true; 

          } else {

            this.submittedWithinLast24Hours = true;

            // Angular remove class
            // let submitBtn = this.el.nativeElement.querySelector("#button");
            // submitBtn.classList.remove('.onclic'); 

            // Vanilla JS remove class
            var submitBtn = document.getElementById("button");
            submitBtn.classList.remove("onclic");

          }
        },
        err => console.log(err),
        () => console.log('done loading hello world test'),
      );

    }

}