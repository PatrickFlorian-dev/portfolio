import { Component, OnInit, Input } from '@angular/core';
import * as $ from "jquery";
import { AuthService } from 'app/shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfo } from 'app/shared/interfaces/user-info';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-unsubscribe',
    templateUrl: './unsubscribe.component.html',
    styleUrls: ['./unsubscribe.component.scss']
})

export class UnsubscribeComponent implements OnInit {

    email: string;

    prodUrl: string = 'http://localhost:4200/';

    constructor(
        private activatedRoute: ActivatedRoute,
        private authService: AuthService,
        private router: Router
        ) { }

    ngOnInit() {

        
        this.activatedRoute.queryParams.subscribe(params => {
            if(params['email']) {
                this.email = params['email']
            } else {
                window.location.href = this.prodUrl;
            }
        });

    }

    unSubscribe() {

        let user = {
            email: this.email,
        }

        this.authService.unsubscribe(user).subscribe(
            data => { 

                if(data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'You have been unsubscribed and will be redirected to the homepage automatically in 10 seconds, enjoy!',
                        showConfirmButton: false,
                        timer: 10000
                    }).then((result) => {
                        // this.router.navigate(['home']);
                        // window.location.href = "http://localhost:4200/";
                    })

                    setTimeout(()=>{
                        window.location.href = this.prodUrl;
                    }, 8000);

                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'This link is no longer valid and you are already unsubscribed. You will will be redirected to the homepage automatically in 10 seconds, thanks!',
                        showConfirmButton: false,
                        timer: 10000
                    }).then((result) => {
                        // this.router.navigate(['home']);
                        // window.location.href = "http://localhost:4200/";
                    })

                    setTimeout(()=>{
                        window.location.href = this.prodUrl;
                    }, 8000);

                }
  
            },
            err => {
                Swal.fire({
                    icon: 'error',
                    title: 'There was an error, please try again. If this issue persists please let me know. Thanks!',
                    showConfirmButton: true,
                })
            },
            () => {},
        );

    }

}