// Component Dependancies
import { Component, OnInit } from '@angular/core';

// Component Decorator with it's Metadata 
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})

// Exportable Component 
export class UserDetailsComponent implements OnInit {

  user: any = null;
  constructor() { }

  ngOnInit(): void {
    // Fetching user details/information on Component Load 
    this.getUserDetails();
  }

  /**
   * Function to get user details/information
   */
  getUserDetails() {
    let user = localStorage.getItem('currentUser');
    if (user) {
      this.user = JSON.parse(user);
    }
  }

}
