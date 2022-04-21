// Component Dependancies
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

// Component Decorator with it's Metadata
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

// Exportable Component
export class SearchComponent implements OnInit {
  successfullUsers: any = [];
  unSuccessfullUsers: any = [];
  userName: any = null;
  user: any = null;
  isSubmitted = false;

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {}

  /**
   * Function to fetch the details of GitHub users
   */
  searchUser() {
    this.isSubmitted = true;
    this.appService.getGitHubUser(this.userName).subscribe(
      (userData: any) => {
        let successfullUsers = [];
        let now = new Date();

        // UserData on successful search
        this.user = {
          ...userData,
          time: now,
        };
        if (localStorage.getItem('successfullUsers')) {
          let successfullUsers: any = localStorage.getItem('successfullUsers');
          successfullUsers = JSON.parse(successfullUsers);
          successfullUsers.push(this.user);
          localStorage.setItem(
            'successfullUsers',
            JSON.stringify(successfullUsers)
          );
        } else {
          successfullUsers.push(this.user);
          localStorage.setItem(
            'successfullUsers',
            JSON.stringify(successfullUsers)
          );
        }
      },
      (err: any) => {
        let now = new Date();
        let unSuccessfullUsers = [];
        this.user = null;
        // UserData on unsuccessful search
        let user = {
          username: this.userName,
          status: 'FAILED',
          time: now,
        };
        if (localStorage.getItem('unSuccessfullUsers')) {
          let unSuccessfullUsers: any =
            localStorage.getItem('unSuccessfullUsers');
          unSuccessfullUsers = JSON.parse(unSuccessfullUsers);
          unSuccessfullUsers.push(user);
          localStorage.setItem(
            'unSuccessfullUsers',
            JSON.stringify(unSuccessfullUsers)
          );
        } else {
          unSuccessfullUsers.push(user);
          localStorage.setItem(
            'unSuccessfullUsers',
            JSON.stringify(unSuccessfullUsers)
          );
        }
      }
    );
  }

  /**
   * Function to route user on user details page
   * @param user An object consisting of user information
   */
  goToDetails(user: any) {
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.router.navigateByUrl('user-details');
    }
  }
}
