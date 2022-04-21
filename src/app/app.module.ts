import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Module Dependancies
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { HistoryComponent } from './components/history/history.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NgHttpLoaderModule } from 'ng-http-loader';

// Module Decorator with it's Metadata
@NgModule({
  // List of dependant components 
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    HistoryComponent,
    UserDetailsComponent
  ],
  // List of dependant modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot()
  ],
  // Provider for the module 
  providers: [],
  // First component to bootstrap the application 
  bootstrap: [AppComponent]
})

// Exportable Module
export class AppModule { }
