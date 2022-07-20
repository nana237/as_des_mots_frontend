import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {baseUrl} from '../serverJs/apiUrl'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http: HttpClient
  ) { }

  searchPerson(data){
    return this.http.get(baseUrl + 'person/?search=' + data);
  }
}
