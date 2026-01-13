import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DataModel } from './models/data-model';
import { Main } from "./apartaments/main/main";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}