import { Component } from '@angular/core';
import { DataModel } from '../../models/data-model';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

  tab?:DataModel[] = [];
  tabLength = this.tab?.length;

}
