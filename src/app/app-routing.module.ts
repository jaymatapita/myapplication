// Dependancies for App Routing 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HistoryComponent } from './components/history/history.component';
import { SearchComponent } from './components/search/search.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

// Application Routes 
const routes: Routes = [
  // Default Route for the app 
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },  
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'user-details',
    component: UserDetailsComponent
  }
];

// Routing Module with it's Metadata 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// Exportable Routing Module 
export class AppRoutingModule { }
