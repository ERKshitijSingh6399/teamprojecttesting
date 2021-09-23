import { Injectable } from '@angular/core';
import { Farmer } from './farmer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  private url :string;

  constructor(private http: HttpClient) { 
    this.url="http://localhost:8400/student";
  }

  
  public createFarmerAccount( farmer : Farmer) : Observable<Farmer>{
    return this.http.post<Farmer>(this.url,farmer);
  }
}
