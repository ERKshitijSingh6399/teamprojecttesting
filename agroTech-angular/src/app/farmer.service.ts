import { Injectable } from '@angular/core';
import { Farmer } from './farmer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  private url :string;

  constructor(private http: HttpClient) { 
    this.url="http://localhost:9100/home";
  }

  
  public addFarmer( farmer : Farmer) : Observable<Farmer>{
    return this.http.post<Farmer>(this.url,farmer);
  }

  // public getAccountbyEmail(email : string  ) : Promise<any>{
  //   return this.http.get<Farmer>(this.url,email);
  // }

  public updateFarmer(farmer :Farmer): Observable<Farmer> {
    return this.http.put<Farmer>(this.url, farmer);
  }
  public deleteFarmer(id: number): void {
    this.http.delete(this.url + "/{id}");
  }

  


}
