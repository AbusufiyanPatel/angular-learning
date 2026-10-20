import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  
  formSubmit(){   
    // this.form.preventDefault();
   const email = document.querySelector("#email") as HTMLInputElement;
   const pass = document.querySelector("#password") as HTMLInputElement;
    // form = document.querySelector("form") as HTMLFormElement;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!emailRegex.test(email.value.trim())){
      alert("Please Enter the valid E Mail");
      return;
    }
    if(!passwordRegex.test(pass.value.trim())){
      alert("Please enter valid password");
      return;
    }
  }

}
