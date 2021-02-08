import { Component, OnInit, HostListener } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-explore-more',
    templateUrl: './explore-more.component.html',
    styleUrls: ['./explore-more.component.scss']
})

export class ExploreMoreComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        (function ($) {
            "use strict"; // Start of use strict
        
            // Smooth scrolling using jQuery easing
            $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
                if (
                    location.pathname.replace(/^\//, "") ==
                        this.pathname.replace(/^\//, "") &&
                    location.hostname == this.hostname
                ) {
                    var target = $(this.hash);
                    target = target.length
                        ? target
                        : $("[name=" + this.hash.slice(1) + "]");
                    if (target.length) {
                        $("html, body").animate(
                            {
                                scrollTop: target.offset().top - 72,
                            },
                            1000,
                            "easeInOutExpo"
                        );
                        return false;
                    }
                }
            });
        
            // Closes responsive menu when a scroll trigger link is clicked
            $(".js-scroll-trigger").click(function () {
                $(".navbar-collapse").collapse("hide");
            });
        
            // Activate scrollspy to add active class to navbar items on scroll
            $("body").scrollspy({
                target: "#mainNav",
                offset: 74,
            });
        
            // Collapse Navbar
            var navbarCollapse = function () {
                if ($("#mainNav").offset().top > 100) {
                    $("#mainNav").addClass("navbar-shrink");
                } else {
                    $("#mainNav").removeClass("navbar-shrink");
                }
            };
            // Collapse now if page is not at top
            navbarCollapse();
            // Collapse the navbar when page is scrolled
            $(window).scroll(navbarCollapse);
        })();
    }

    scrollToSection(idValue:string) {
        let section = <HTMLElement> document.querySelector(idValue);

        section.scrollIntoView({
            behavior: 'smooth',
        });
    }

    switchMapCard( location : string ) {

        const californiaSrc = './assets/img/bgs/sequoia.jpg';
        const californiaTitle = 'Sequoia National Park, California, USA';
        const californiaDesc = `I know we're small on the galactic scale but you really don't realize how small you until you stand next to one of these behemoths. Giant sequoias can grow to be about 30 feet (9 meters) in diameter and more than 250 feet (76 m) tall.`;

        const coloradoSrc = './assets/img/templates/exploremore/mountainsbg2.jpg';
        const coloradoTitle = 'Rocky Mountain National Park, Colorado, USA';
        const coloradoDesc = `Easily my favorite state and place! Rocky mountain national park is just pure bliss on a scale you never experienced before. Go on a weekday to avoid the crowds and to experience the majestic views. I can't wait to go back.`;

        const wyomingSrc = './assets/img/bgs/yellowstone.jpg';
        const wyomingTitle = 'Yellowstone National Park, Wyoming, USA';
        const wyomingDesc = `Beauitful isn't the word for this park in the middle of nowhere. It's also huge! I recommend spending at least 2-3 days exploring the park and get the multiday pass.`;

        const niagraSrc = './assets/img/bgs/niagra.jpg';
        const niagraTitle = 'Niagra Falls, New York, USA';
        const niagraDesc = `Located in my home state, this is truly a majestic place to visit. There's a restuarant on up by the top with great views you have to check out while you grab a bite to eat!`;

        const keywestSrc = './assets/img/bgs/keywest.jpg';
        const keywestTitle = 'Key West, Florida, USA';
        const keywestDesc = `I lived in Tampa for 6 years and going to Key West was always a blast. I sugguest dolphin watching on a jetski tour or partying with the locals on first Friday. Just be careful, these locals can party and you might lose sleep trying to keep up.`;

        const rioSrc = './assets/img/bgs/rio.jpeg';
        const rioTitle = 'Rio De Janeiro, Brazil';
        const rioDesc = `Rio is an awesome mix of city, beach, and jungle. Perfect diversification in exploring. Just be careful wandering the streets alone, Brazil's crime rate is through the roof!`;

        const peruSrc = './assets/img/bgs/peru.jpg';
        const peruTitle = 'Machu Pichu, Peru';
        const peruDesc = `Ever seen ruins as old as hummanity itself? Head to Peru where you can observe these amazing structures. Just hit the treadmill to get in shape a little you have to literally climb a small mountain to get up there.`;

        const argentinaSrc = './assets/img/bgs/argentina.jpg';
        const argentinaTitle = 'Santiago, Argentina';
        const argentinaDesc = `Not a lot of people hear of Santiago but that's the hidden beauty. The city is compromised of beautiful old European architecture and thier mountains offer an amazing view. Prowl the city at night for goof eats and friendly locals.`

        const egyptSrc = './assets/img/bgs/egypt.jpg';
        const egyptTitle = 'Cairo, Egypt';
        const egyptDesc = `Everyone wants to see the pyramids but what they don't know is what Cairo offers. There's many things to do like snorkeling, camel riding, dune buggy racing, a theme park, and much more!`;

        const madagascarSrc = './assets/img/bgs/madagascar.jpg';
        const madagascarTitle = 'Madagascar';
        const madagascarDesc = `Madagascar feels like a different planet and the lemurs jumping on your back to ask for food is awesome! Take a flight to Johannesburg and ferry to Madagascar for a day or two.`;

        const europeSrc = './assets/img/bgs/europe.jpeg';
        const europeTitle = 'Multiple countries, European Nation (EU)';
        const europeDesc = `There is just too much beauty way too close to each other in Europe. From Italy to greece to Germany and Portugal everything is just a train ride away! Buy a monthly multipass and just keep traveling but be careful of getting stranded for a bit in smaller countries as they are rural and hard to navigate (I got lost in Romania for two days 😬)`;

        const russiaSrc = './assets/img/bgs/russia.jpg';
        const russiaTitle = 'Krasnoyarsk, Russia (USSR)';
        const russiaDesc = `Ok I guranetee 99% of you have never heard of this place and usually you think Russia is mainly Moscow but for the worlds largest continent, there's much more to it. Krasnoyarsk was a hidden gem lost in time, out in the middle of of Russia surronded by endless lush forests, volcanic rock pillars, and mountains, this beautiful city is worth the flight!`;

        const busanSrc = './assets/img/bgs/busan.jpg';
        const busanTitle = 'Busan, South Korea';
        const busanDesc = `Busan is a beautiful costal city. Not too far from Seoul I recommend you book a trip here and catch a ferry to southern Japan. Busan offers ancient culture, great foods, and friendly locals.`;

        const japanSrc = './assets/img/bgs/japan.jpg';
        const japanTitle = 'Mt. Fuji, Miyoshi, Japan';
        const japanDesc = `The towns surronding Mt Fuji feel like you are in a different world! It's amazing and my recommendation is to fly to Tokyo then rent a car and travel down Japan to Mt Fuji and even to the southern coast to Kumamoto.`;

        const singaporeSrc = './assets/img/bgs/singapore.jpg';
        const singaporeTitle = 'Singapore, Malaysia';
        const singaporeDesc = `Singapore is an amazing city with tons to offer from nightlife to fantastic views to the lesser know outside country area. Visit here and while you're there take a boat ride to the Maldives.`;

        const australiaSrc = './assets/img/bgs/australia.jpg';
        const australiaTitle = 'Sydney, Australia';
        const australiaDesc = `Located on the east coast of Australia, Sydney is offers amazing views, tons of things to do, and the great barrier reef. Melbourne is also cool and about a 6 hour drive away.`;

        // Fade it out by default
        $("#card").animate({ opacity: 'toggle' }, 'fast');
        setTimeout(()=>{
            $( ".spinner" ).toggle();
        }, 100);

        switch ( location ) {
            case 'california': 
                setTimeout(()=>{
                    $('#card-img-top').attr('src', californiaSrc);
                    $( "#card-title" ).text(californiaTitle);
                    $( "#card-desc" ).text(californiaDesc);
                }, 200);
            break;

            case 'colorado': 
                setTimeout(()=>{
                    $('#card-img-top').attr('src', coloradoSrc);
                    $( "#card-title" ).text(coloradoTitle);
                    $( "#card-desc" ).text(coloradoDesc);
                }, 200);
            break;
            
            case 'wyoming': 
                setTimeout(()=>{
                    $('#card-img-top').attr('src', wyomingSrc);
                    $( "#card-title" ).text(wyomingTitle);
                    $( "#card-desc" ).text(wyomingDesc);
                }, 200);
            break;

            case 'niagra': 
                setTimeout(()=>{
                    $('#card-img-top').attr('src', niagraSrc);
                    $( "#card-title" ).text(niagraTitle);
                    $( "#card-desc" ).text(niagraDesc);
                }, 200);
            break;

            case 'keywest': 
                setTimeout(()=>{
                    $('#card-img-top').attr('src', keywestSrc);
                    $( "#card-title" ).text(keywestTitle);
                    $( "#card-desc" ).text(keywestDesc);
                }, 200);
            break;

            case 'rio': 
                setTimeout(()=>{
                    $('#card-img-top').attr('src', rioSrc);
                    $( "#card-title" ).text(rioTitle);
                    $( "#card-desc" ).text(rioDesc);
                }, 200);
            break;

            case 'peru': 
                setTimeout(()=>{
                    $('#card-img-top').attr('src', peruSrc);
                    $( "#card-title" ).text(peruTitle);
                    $( "#card-desc" ).text(peruDesc);
                }, 200);
            break;

            case 'peru': 
                setTimeout(()=>{
                    $('#card-img-top').attr('src', argentinaSrc);
                    $( "#card-title" ).text(argentinaTitle);
                    $( "#card-desc" ).text(argentinaDesc);
                }, 200);
            break;

            case 'egypt': 
                setTimeout(()=>{
                    $('#card-img-top').attr('src', egyptSrc);
                    $( "#card-title" ).text(egyptTitle);
                    $( "#card-desc" ).text(egyptDesc);
                }, 200);
            break;

            case 'madagascar': 
                setTimeout(()=>{
                    $('#card-img-top').attr('src', madagascarSrc);
                    $( "#card-title" ).text(madagascarTitle);
                    $( "#card-desc" ).text(madagascarDesc);
                }, 200);
            break;

            case 'europe': 
                setTimeout(()=>{
                    $('#card-img-top').attr('src', europeSrc);
                    $( "#card-title" ).text(europeTitle);
                    $( "#card-desc" ).text(europeDesc);
                }, 200);
            break;

            case 'russia': 
                setTimeout(()=>{
                    $('#card-img-top').attr('src', russiaSrc);
                    $( "#card-title" ).text(russiaTitle);
                    $( "#card-desc" ).text(russiaDesc);
                }, 200);
            break;

            case 'busan': 
                setTimeout(()=>{
                    $('#card-img-top').attr('src', busanSrc);
                    $( "#card-title" ).text(busanTitle);
                    $( "#card-desc" ).text(busanDesc);
                }, 200);
            break;

            case 'japan': 
                setTimeout(()=>{
                    $('#card-img-top').attr('src', japanSrc);
                    $( "#card-title" ).text(japanTitle);
                    $( "#card-desc" ).text(japanDesc);
                }, 200);
            break;

            case 'singapore': 
                setTimeout(()=>{
                    $('#card-img-top').attr('src', singaporeSrc);
                    $( "#card-title" ).text(singaporeTitle);
                    $( "#card-desc" ).text(singaporeDesc);
                }, 200);
            break;

            case 'australia': 
                setTimeout(()=>{
                    $('#card-img-top').attr('src', australiaSrc);
                    $( "#card-title" ).text(australiaTitle);
                    $( "#card-desc" ).text(australiaDesc);
                }, 200);
            break;
        
            default:
                console.log('Location not found!')
        }

        setTimeout(()=>{
            $( ".spinner" ).toggle();
            $("#card").animate({ opacity: 'toggle' }, 'slow');
        }, 1000);

    }

}

