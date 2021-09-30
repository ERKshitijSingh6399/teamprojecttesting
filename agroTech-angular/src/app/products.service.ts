import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Products } from './products';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 url :string;
  constructor(private http : HttpClient) {
    this.url="https://localhost:9100/farmer";
   }

  getAllProducts(){
    return this.http.get<any>(this.url+"/getallproducts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  public addProduct( product : Products) : Observable<Products>{
    return this.http.post<Products>(this.url + "/addproduct",product);
  }

 
}
