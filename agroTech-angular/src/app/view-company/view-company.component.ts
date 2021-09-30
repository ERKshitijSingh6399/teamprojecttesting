import { Component, OnInit } from '@angular/core';
import { Companies } from '../companies';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {

  private companies : Companies[];
  constructor(private service : CompaniesService) { }

  ngOnInit() {
    this.service.getAllCompanies().subscribe(res =>{
      this.companies=res;
    })
  }


  
}
