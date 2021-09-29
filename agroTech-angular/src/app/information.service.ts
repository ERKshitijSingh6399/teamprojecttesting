import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Information } from './information';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  private url :string;

  constructor(private http: HttpClient) { 
    this.url="http://localhost:9100/farmer";
  }

  
  public addInformation( information : Information) : Observable<Information>{
    return this.http.post<Information>(this.url + "/addInformation",information);
  }
}
