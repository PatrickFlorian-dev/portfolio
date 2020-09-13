import { Component, OnInit, HostListener } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss']
})

export class AboutMeComponent implements OnInit {

    curState: number = 1;
    // 1 = Early Days
    // 2 = Developer
    // 3 = Senior Engineer 
    // 4 = Now

    constructor() {}

    ngOnInit() {
        
        $('#timeline-img-right-cont').click(function(){
            $( "#timeline-img-right-img" ).fadeOut( "slow" );
        });
        
    }

    stateHandler( state: number) {

        if (state === this.curState) {
            return null;
        }

        var fadeElOut = '#' + this.curState.toString();
        $(fadeElOut).fadeOut( "slow" );

        this.curState = state;

        setTimeout(()=>{
            var fadeElIn = '#' + state.toString();
            $(fadeElIn).fadeIn( "slow" );
        }, 600);

    }

}