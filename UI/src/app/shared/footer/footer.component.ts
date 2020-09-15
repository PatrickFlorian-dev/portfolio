import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DataService } from '../services/data.service';
import { ContactFormInfo } from '../interfaces/contact-form-info';
declare var $: any;

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    
    test : Date = new Date();

    emailValue: string;
    emailTouched: boolean = false;
    formValid: boolean = false;
    subscribed: boolean = false;

    constructor(private dataService: DataService,) { }

    ngOnInit() {

        $('button').click(function(){
            $('.pop-up').addClass('open');
        });
          
        $('.pop-up .close').click(function(){
            $('.pop-up').removeClass('open');
        });

    }

    touchInput( input : string ) {

        switch (input) {

            case 'email':
              this.emailTouched = true;
  
              if(this.emailValue.length == 0) {
                $("#error-text").fadeIn();
                document.getElementById("error-text-span").innerHTML = "Email is required"
              } else {
                if(this.email_check(this.emailValue)) {
                    $("#error-text").fadeOut();
                    this.formValid = true;
                } else {
                    $("#error-text").fadeIn();
                    document.getElementById("error-text-span").innerHTML = "Email is invalid"
                }
              }
  
              break;
            default:
              console.log(`Could not determine the input field.`);
        }

    }

    email_check( email ) {    
        var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return (email != '' && email != 'undefined' && regex.test(email)); 
    }

    subscribe() {

        if(!this.formValid) {
            $("#error-text").fadeIn();
            document.getElementById("error-text-span").innerHTML = "Email is invalid or empty";
            return null;
        }

        const contactInformation : ContactFormInfo = {
            "name": null,
            "email": this.emailValue,
            "phone": null,
            "message": null,
        }

        this.dataService.subscribeForm( contactInformation ).subscribe(
            data => { 
              
              let _data: any = data;
              
              if(_data.success) {

                this.subscribed = false;
    
                // ADD IF LOGIC API CALL
                $( "#subscribe-email" ).animate({
                    width: '5%',
                }, 0, function() {
                    setTimeout(function(){
                        $("#subscribe-email").hide();
                        $("#subscribe-submit").css("cursor", "default");
                        $("#subscribe-submit").val('Thank you for subscribing!');
                    },500);
                });

                $("#subscribe-submit").animate({
                    width: '95%',
                },
                0, 'linear');

              } else {
    
                this.subscribed = true;
                $("#error-text").fadeIn();
                document.getElementById("error-text-span").innerHTML = "You are already subscribed! To unsubscribe please click the unsubscribe link on the email you received.";
    
              }
            },
            err => console.log(err),
            () => console.log('done loading'),
          );

    }
}
