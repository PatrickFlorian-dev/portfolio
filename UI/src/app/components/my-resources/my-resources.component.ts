import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/shared/services/data.service';
import { GitInfo } from 'app/shared/interfaces/git-info';
import { GitCredentailsInfo } from 'app/shared/interfaces/git-credentials-info';
declare var $: any;

@Component({
  selector: 'app-my-resources',
  templateUrl: './my-resources.component.html',
  styleUrls: ['./my-resources.component.scss']
})
export class MyResourcesComponent implements OnInit {

  constructor(private dataService: DataService) { }

  public reposLoading: boolean = true;
  public repos: GitInfo[] = [];
  public totalRepoCount: number = 0;
  public gitUsername: string = 'patrickflorian-dev';
  public noResultsFound: boolean = false; 

  // Prism
  // content = `<p>test {{language}}</p>`;
  // hooks = {
  //   'before-sanity-check': (env) => { console.log(`before-sanity-check`, env); },
  //   'before-highlight': (env) => { console.log(`before-highlight`, env); },
  //   'after-highlight': (env) => { console.log(`after-highlight`, env); },
  //   'complete': (env) => { console.log(`complete`, env); },
  //   'before-insert': (env) => { console.log(`before-insert`, env); }
  // };
  // interpolate = {
  //   language: 'language interpolated'
  // };
  // language = 'html';

  ngOnInit() {

    // Initialize with my repos first
    this.getGitReposByUsername('patrickflorian-dev');

  }

  getGitReposByUsername( username : string ) {

    this.dataService.getGitRepos( username ).subscribe(
      data => { 
        
        this.repos = [];
        let _data: any = data;
        let _repoCount = 0;
        this.noResultsFound = false;
        
        _data.forEach((_repo, index) => {

          let repo: GitInfo = new GitInfo();
          repo.gitId = _repo.id;
          repo.repoName = _repo.name;
          repo.ownerName = _repo.owner.login;
          repo.repoUrl = _repo.html_url;
          repo.updatedAt = _repo.updated_at;
          repo.pushedAt = _repo.pushed_at;
          repo.createdAt = _repo.created_at;

          if(index <= 9) {
            this.repos.push(repo);  
          }

          _repoCount++;

        });

        this.totalRepoCount = _repoCount;
        this.reposLoading = false;
        
      },
      err => { 
        console.log(err.status);
        setTimeout(()=>{
          $("#inp").val(this.gitUsername);
        }, 100);
        this.repos = [];
        this.reposLoading = false;
        this.noResultsFound = true;
      },
      () => {
        setTimeout(()=>{
          $("#inp").val(this.gitUsername);
        }, 100);
      }
    );

  }

  updateRepos() {
    this.reposLoading = true;
    this.getGitReposByUsername(this.gitUsername);
  }

}
