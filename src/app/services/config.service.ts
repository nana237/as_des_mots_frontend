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

  getAllNiveau(){
    return this.http.get(baseUrl + 'level/');
  }

  getBlocQuestionByLevel(data){
    return this.http.get(baseUrl + 'Word_package/?level=' + data);
  }
}
