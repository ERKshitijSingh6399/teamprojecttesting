import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-products',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {

  public productList : any ;

  searchKey:string ="";
  constructor(private api : ProductsService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getAllProducts()
    .subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a:any) => {
      
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

}