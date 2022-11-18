import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CropsService {

  apiurl ='https://localhost:7167/api/Crops/'

  constructor(private http:HttpClient) { }

  getcrops(){
    return this.http.get(this.apiurl);
  }
}
