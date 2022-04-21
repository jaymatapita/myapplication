// Service Dependancies
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

// Service Decorator with it's Metadata
@Injectable({
  providedIn: 'root'
})
// Exportable Service 
export class AppService {

  constructor(private httpClient: HttpClient) { }

  
  /**Service function to get GitHub User details 
   * 
   * @param username Github username in string
   * @returns Observable to subscribe result or error
   */
  getGitHubUser(username:any) {
    return this.httpClient.get(environment.gitHubURL + username);
  }

}
