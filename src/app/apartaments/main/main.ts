import { Component } from '@angular/core';
import { DataModel } from '../../models/data-model';
import { ApartamentsService } from '../apartaments-service';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

  tab?:DataModel[] = [];
  tabLength = this.tab?.length;

  constructor(private readonly apartamentsService: ApartamentsService) {}

  ngOnInit() {
    this.getApartaments();
  }

  getApartaments() {
    this.apartamentsService.getApartaments().subscribe(dataFromSrv => {
      console.log(dataFromSrv);
    });
  }
}
