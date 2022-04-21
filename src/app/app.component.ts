// Component Dependancies
import { Component } from '@angular/core';

// Component Decorator with it's Metadata
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// Exportable Component 
export class AppComponent {
  title = 'MyApplication';
}
