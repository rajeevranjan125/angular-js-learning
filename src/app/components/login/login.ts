import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username: string = "rajeev"

  salary :number=90000.50

  user = {email:'rajeev@ibm.com', password :'sonu123'}

  isHidden = true;

  fun = ()=>{

    console.log("function called");

    this.isHidden = !this.isHidden;
  }
  isSpecial = false;

  changeColor = ()=>{

    this.isSpecial = !this.isSpecial;
  }

  currentStyle = {};

  chnageCss = ()=>{
  
    this.currentStyle ={
      color:"red"
    }
  }
}
