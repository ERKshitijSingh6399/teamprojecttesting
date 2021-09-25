import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  private students : Products[];
  constructor( private service : ProductsService) { 

  }

  ngOnInit() {
    this.service.getAllProducts().subscribe(res =>{
      this.students= res;
    })
  }

}
