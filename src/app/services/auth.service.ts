import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {baseUrl} from '../serverJs/apiUrl'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  connected=false;
  userdata;
  userCompleteData;

  constructor(
    private http: HttpClient
  ) { }

  getAllOrganization(){
    // return this.http.get(baseUrl+'')
  }
  getAllLevel(){}
  getAlltown(){}


  login(data){
    return this.http.post(baseUrl + 'dj-rest-auth/login/', data);
  }

  register(data){
    console.log('inside auth');
    console.log(data);
    return this.http.post(baseUrl + 'dj-rest-auth/registration/', data);

  }

  completeInfo(data){
    return this.http.post(baseUrl + 'person/', data);
  }
}
