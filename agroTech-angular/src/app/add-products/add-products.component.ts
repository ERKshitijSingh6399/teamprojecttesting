import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {

  products : Products;
  constructor(private service : ProductsService,private router : Router) {
    this.products=new Products();
   }

   public addProduct(){
     this.service.addProduct(this.products).subscribe(res=>{
       this.products=new Products();
       this.router.navigate(['/shop']);
     })
   }

}


