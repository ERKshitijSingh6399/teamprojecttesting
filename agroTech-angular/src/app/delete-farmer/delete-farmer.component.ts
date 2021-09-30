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


  public deleteFarmer(){
    
    this.service.deleteFarmer(this.farmerId)
    console.log('doing');
    this.router.navigate(['/viewAllFarmers']);
  }

}
