// Component Dependancies
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Component Decorator with it's Metadata
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})

// Exportable Component
export class HistoryComponent implements OnInit {

  successfullUsers: any = [];
  unSuccessfullUsers: any = [];
  currentTab = 'tab1';
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Fetching history on component load
    this.getHistory();
  }

  /**
   * Function to fetch search history for both Successful and Unsuccessful searches
   */
  getHistory() {
    if (localStorage.getItem('successfullUsers')) {
      let successfullUsers: any = localStorage.getItem('successfullUsers');
      this.successfullUsers = JSON.parse(successfullUsers);
    }
    else{
      this.successfullUsers = [];
    }

    if (localStorage.getItem('unSuccessfullUsers')) {
      let unSuccessfullUsers: any = localStorage.getItem('unSuccessfullUsers');
      this.unSuccessfullUsers = JSON.parse(unSuccessfullUsers)
    }
    else{
      this.unSuccessfullUsers = [];
    }
  }

  // Function to feed tab selection
  setTab(tab: any) {
    this.currentTab = tab;
  }

  /**
   * Function to clear all history at one go
   */
  clearHistory() {
    if (confirm('Are you sure you want to delete the history?') == true) {
      localStorage.clear();
      this.getHistory();
      this.successfullUsers = [];
      this.unSuccessfullUsers = [];
    }
  }

  /**
   * Function to route user to user details screen
   * @param user An object consisting user information
   */
  goToDetails(user:any){
    if(user){
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.router.navigateByUrl('user-details');
    }
  }
}
