import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farmer } from '../farmer';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-delete-farmer',
  templateUrl: './delete-farmer.component.html',
  styleUrls: ['./delete-farmer.component.css']
})
export class DeleteFarmerComponent  {
   farmer:Farmer;
  farmerId:number;

  constructor(private service: FarmerService, private router :Router) { }

  // ngOnInit() {
	//   if(!localStorage.getItem('token')){  
	//   console.log('helo');
	//   }else{
	// 	let getUserObj=JSON.parse(localStorage.getItem('token'));  
	// 	this.farmer.farmerId=getUserObj.farmerId;
  //   this.farmerId=this.farmer.farmerId;
  //   }
	// }
  // public deleteFarmer(){
  //   this.service.deleteFarmer(this.farmerId)
  //   this.router.navigate(['/home']);
  // }

  public deleteFarmer(){
    console.log('doing');
    this.service.deleteFarmer(this.farmerId)
    this.router.navigate(['/home']);
  }

}
