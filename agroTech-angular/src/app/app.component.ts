import { Component ,ViewChild,AfterViewInit} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Farmer } from './farmer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'agroTech-angular';


  
  loggedInUser : string;
  farmerId : number;
  flag: boolean;
 
  // loggedIn() {
  //   this.flag=false;
  //   this.loggedInUser = localStorage.getItem('token');
  //   var object = JSON.parse(this.loggedInUser);
    
  //     if(object.farmerId<5){
  //       this.flag=true;
  //     }
  //     else{
  //       this.flag=false;
  //     }
  //     return object.farmerName;

  // }

  loggedIn() {
    this.loggedInUser = localStorage.getItem('token');
    return this.loggedInUser;
  }

logout(){
  
  localStorage.removeItem('token');
}

}
