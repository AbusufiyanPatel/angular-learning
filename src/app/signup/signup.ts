import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signup',
  styleUrl: './signup.css',
  templateUrl: './signup.html',
})
export class Signup {

  onSubmit(event : any){
    event.preventDefault();
    // let name = event.target[0] as HTMLInputElement;
    // let email = event.target[1] as HTMLInputElement;
    console.log(event.target[0].value);
    console.log(event.target[1].value);
  }


}
