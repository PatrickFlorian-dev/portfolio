import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserInfo } from '../interfaces/user-info';
import { ContactFormInfo } from '../interfaces/contact-form-info';
import { GitCredentailsInfo } from '../interfaces/git-credentials-info';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:8000";

  headers = new HttpHeaders({
    'Accept': 'application/json', 
    //'Authorization': 'Basic ' + btoa(user.email + ':' + user.password),
    'Content-Type': 'application/json',
  }) 

  constructor(private httpClient: HttpClient) { }

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

  public submitContactForm(contactInfo: ContactFormInfo) {
    return this.httpClient.post(this.REST_API_SERVER + '/api/contact-me/', contactInfo ).pipe(retry(0), catchError(this.handleError));
  }

  public subscribeForm(contactInfo: ContactFormInfo) {
    return this.httpClient.post(this.REST_API_SERVER + '/api/subscribe/', contactInfo ).pipe(retry(0), catchError(this.handleError));
  }

  public getGitRepos(username: string) {
    return this.httpClient.get(`https://api.github.com/users/${username}/repos`).pipe(retry(0), catchError(this.handleError));
  }

  public getGitBranchesByRepoAndOwner(gitCreds: GitCredentailsInfo) {
    return this.httpClient.get(`https://api.github.com/repos/${gitCreds.gitUsername}/${gitCreds.repoName}/branches`).pipe(retry(0), catchError(this.handleError));
  }

  public getGitCommitsByRepoAndOwner(gitCreds: GitCredentailsInfo) {
    return this.httpClient.get(`https://api.github.com/repos/${gitCreds.gitUsername}/${gitCreds.repoName}/commits`).pipe(retry(0), catchError(this.handleError));
  }

}