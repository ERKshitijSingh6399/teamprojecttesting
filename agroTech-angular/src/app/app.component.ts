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


  // ngAfterViewInit(){
  //   this.farmerId=this.child.farmerId;
  // }

 loggedIn(){
  this.loggedInUser = localStorage.getItem('token');

  return this.loggedInUser;

 
  }

id:number;
// loggedIn(){
//   return this.loggedIn;
// }

receiveId($event){
  this.id= $event
}


logout(){
  localStorage.removeItem('token');
}

}
