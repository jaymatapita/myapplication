// Component Dependancies 
import { Component, OnInit } from '@angular/core';

// Component Decorator with it's Metadata 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

// Exportable Component 
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
