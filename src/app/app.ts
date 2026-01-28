import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DataModel } from './models/data-model';
import { Main } from "./apartaments/main/main";
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ShareHeaderComponent } from "./apartaments/share-header-component/share-header-component";
import { ShareAsideComponent } from "./apartaments/share-aside-component/share-aside-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ShareHeaderComponent, ShareAsideComponent],
  providers: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}