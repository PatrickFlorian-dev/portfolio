import { Component, OnInit, Input } from '@angular/core';
import * as $ from "jquery";
import { AuthService } from 'app/shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from 'app/shared/interfaces/user-info';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-password-reset',
    templateUrl: './password-reset.component.html',
    styleUrls: ['./password-reset.component.scss']
})

export class PasswordResetComponent implements OnInit {

    user: UserInfo;

    accessDenied: boolean;

    passwordsMatch: boolean = true;

    passwordReset: boolean = false;

    resetPasswordForm = new FormGroup({
        password: new FormControl('',[Validators.required, Validators.minLength(6)]),
        passwordConfirm: new FormControl('',[Validators.required]),
    });

    constructor(
        private authService: AuthService,
        private activatedRoute: ActivatedRoute
        ) { }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.checkToken(params['username'],params['reset_token']);
        });
    }

    checkToken( username: string , reset_token: string ) {

        let user = {
            username: username,
            reset_token: reset_token
        }

        this.authService.checkPasswordResetToken(user).subscribe(
            data => { 
                if(data['success']) {
                    this.accessDenied = false;
                    this.getUser(username)
                } else {
                    this.accessDenied = true;
                }
            },
            err => {},
            () => {},
        );
    }

    getUser( username: string ) {

        let user = {
            username: username
        }

        this.authService.getUser(user).subscribe(
            data => { 
                this.user = data['user'][0]
            },
            err => {
                console.log(err)
            },
            () => { 
                console.log('User retrieved')
            },
        );
    }

    onSubmit() {
        if(this.resetPasswordForm.valid && this.resetPasswordForm.value.password === this.resetPasswordForm.value.passwordConfirm) {
            this.passwordsMatch = true
            this.resetPassword();
        } else {
            this.passwordsMatch = false
        }
    }

    resetPassword() {

        let user = {
            username: this.user.username,
            password: this.resetPasswordForm.value.password
        }

        this.authService.resetPassword(user).subscribe(
            data => { 
                this.passwordReset = true;
            },
            err => {
                console.log(err)
            },
            () => {},
        );

    }

}