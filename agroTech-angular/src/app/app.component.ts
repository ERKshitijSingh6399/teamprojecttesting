import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Farmer } from './farmer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agroTech-angular';

  loggedInUser : string;
  farmer : Farmer;

//  loggedIn(){
//   let getUserObj=JSON.parse(localStorage.getItem('token'));  
// 		// this.farmer.farmerId=getUserObj.farmerId;
// 		// this.farmer.farmerName=getUserObj.farmerName;
// 		// this.farmer.contactNumber=getUserObj.contactNumber;
// 		// this.farmer.email=getUserObj.email;
// 		// this.farmer.age=getUserObj.age;
// 		// this.farmer.gender=getUserObj.gender;
// 		// this.farmer.password=getUserObj.password;


//     this.farmer.farmerName=getUserObj.farmerName;
//     this.loggedInUser=this.farmer.farmerName;
//     return this.farmer.farmerName;
//  }

 loggedIn(){
  this.loggedInUser = localStorage.getItem('token');

  return this.loggedInUser;
}


// loggedIn(){
//   return this.loggedIn;
// }



logout(){
  localStorage.removeItem('token');
}

}
