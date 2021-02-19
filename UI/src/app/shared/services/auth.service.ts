import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserInfo } from '../interfaces/user-info';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private REST_API_SERVER: string = 'https://pflorian.pythonanywhere.com';
  private REST_API_SERVER: string = 'http://localhost:8000';

  headers = new HttpHeaders({
    'Accept': 'application/json', 
    //'Authorization': 'Basic ' + btoa(user.email + ':' + user.password),
    'Content-Type': 'application/json',
  }) 

  constructor(private httpClient: HttpClient) { 
    
    // switch (window.location.hostname) {

    //   case 'localhost':
    //     this.REST_API_SERVER = 'http://localhost:8000';
    //     break;

    //   default:
    //     console.log('Could not determine host env, switching to local');
    //     this.REST_API_SERVER = 'http://localhost:8000';
    //     break;

    // }

  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(){

    const headers = new HttpHeaders({
        'Accept': 'application/json', 
        'Authorization': 'Basic ' + btoa('patrick:pflorian212'),
        'Content-Type': 'application/json',
    })

    return this.httpClient.get(this.REST_API_SERVER + '/hello/', { headers: headers }).pipe(retry(0), catchError(this.handleError));
  }

  public login(user: UserInfo) {
    return this.httpClient.post(this.REST_API_SERVER + '/api/login/', user ).pipe(retry(0), catchError(this.handleError));
  }

  public register(user: UserInfo) {
    return this.httpClient.post(this.REST_API_SERVER + '/api/register/', user ).pipe(retry(0), catchError(this.handleError));
  }

  public getUser(user: UserInfo) {
    return this.httpClient.post(this.REST_API_SERVER + '/api/profile/', user ).pipe(retry(0), catchError(this.handleError));
  }

  public sendPasswordResetEmail(user: UserInfo) {
    return this.httpClient.post(this.REST_API_SERVER + '/api/password-reset/', user ).pipe(retry(0), catchError(this.handleError));
  }

  public unsubscribe(user: UserInfo) {
    return this.httpClient.post(this.REST_API_SERVER + '/api/unsubscribe/', user ).pipe(retry(0), catchError(this.handleError));
  }

  public checkPasswordResetToken(user: UserInfo) {
    return this.httpClient.post(this.REST_API_SERVER + '/api/password-reset-confirm/', user ).pipe(retry(0), catchError(this.handleError));
  }

  public resetPassword(user: UserInfo) {
    return this.httpClient.post(this.REST_API_SERVER + '/api/update-password/', user ).pipe(retry(0), catchError(this.handleError));
  }

}