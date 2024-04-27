import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
navBar!: string;

constructor(){

}
navBarAlert(option: string){
alert(`You are at ${option} page!`);
}
// homeNavBarAlert(){
//  alert("You are at home page!");
// }
// teamNavBarAlert(){
//   alert("You are at team page!");
//  }
//  featNavBarAlert(){
//   alert("You are at feature page!");
//  }
//  blogNavBarAlert(){
//   alert("You are at blog page!");
//  }
//  aboutNavBarAlert(){
//   alert("You are at about page!");
//  }
//  contactNavBarAlert(){
//   alert("You are at contact page!");
//  }
}
