import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Information } from '../information';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  private information : Information[];
  constructor( private service : InformationService) { 

  }

  ngOnInit() {
    this.service.getAllInformation().subscribe(res =>{
      this.information= res;
    })
  }
}
