import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal("Hello My dear angular");

  add(a: number, b:number) {
      return a+b;
  }

  valAdd = this.add(10,100);
}
