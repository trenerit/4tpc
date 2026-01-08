import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  firstname: string = '';

  protected onSubmit(data: any): void {
    console.log(data.value.firstname);
    this.firstname = data.value.firstname;
  }
 }