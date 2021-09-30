import { Component, OnInit } from '@angular/core';
import { Farmer } from '../farmer';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-view-all-farmers',
  templateUrl: './view-all-farmers.component.html',
  styleUrls: ['./view-all-farmers.component.css']
})
export class ViewAllFarmersComponent implements OnInit {

  private farmers : Farmer[];
  constructor(private service : FarmerService) { }

  ngOnInit() {
    // this.service.getAllFarmers().subscribe(res=>{
    //   this.farmers=res;
    // })
  }


  // private students : Student[];
  // constructor( private service : StudentService) { 

  // }

  // ngOnInit() {
  //   this.service.getAllStudents().subscribe(res =>{
  //     this.students= res;
  //   })
  // }

}