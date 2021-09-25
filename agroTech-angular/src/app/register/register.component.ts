import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farmer } from '../farmer';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 farmer : Farmer
  constructor(private service : FarmerService,private router :Router) { 
    this.farmer=new Farmer();
  }

  public addFarmer(){
    this.service.addFarmer(this.farmer).subscribe(res =>{
      this.farmer= new Farmer();
      this.router.navigate(['/login']);
    })
  }

}
