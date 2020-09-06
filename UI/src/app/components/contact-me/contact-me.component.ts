import { Component, OnInit, Input } from '@angular/core';
// import * as L from 'leaflet';
// import { tileLayer } from 'leaflet';
// import { latLng } from 'leaflet';
// import { circle } from 'leaflet';
// import { polygon } from 'leaflet';
import * as $ from "jquery";
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AuthService } from 'app/shared/services/auth.service';

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
    
    submitted = false;

    nameValue: string;
    nameTouched: boolean = false;
    emailValue: string;
    emailTouched: boolean = false;
    phoneValue: string;
    phoneTouched: boolean = false;
    messageValue: string;

    constructor(private authService: AuthService) {
        this.nameValue = '';
        this.emailValue = '';
        this.phoneValue = '';
        this.messageValue = '';
    }

    touchInput( inputName: string ) {

        switch (inputName) {
            case 'name':
              this.nameTouched = true;
              break;
            case 'email':
              this.emailTouched = true;
              break;
            case 'phone':
              this.phoneTouched = true;
              break;
            default:
              console.log(`Could not determine the input field.`);
          }
        
    }

    ngOnInit() {

      this.authService.sendGetRequest().subscribe(
        data => { console.log(data);},
        err => console.log(err),
        () => console.log('done loading hellow world test'),
      );

    }

    onSubmit() { 

      console.log(this.emailValue)

        $( ".input-effect , .greetings-cont , .submit-btn-container" ).fadeOut( "linear", function() {
            setTimeout(()=>{
              $(".thank-you-cont").fadeIn(400 , "linear")
          }, 800);
  
        });

        this.submitted = true; 

    }

}