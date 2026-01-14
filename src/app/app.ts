import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DataModel } from './models/data-model';
import { Main } from "./apartaments/main/main";
import { provideHttpClient, withInterceptors } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  providers: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}