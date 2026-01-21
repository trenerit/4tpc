import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { DataModel } from '../../models/data-model';
import { ApartamentsService } from '../apartaments-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-main',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './main.html',
  styleUrl: 'main.scss',
})
export class Main {

  dataFromSrv: DataModel[] = [];

  constructor(private readonly apartamentsService: ApartamentsService) { }

  ngOnInit() {
    this.getApartaments();
  }

  getApartaments() {
    this.apartamentsService.getApartaments().subscribe(dataFromSrv => {
      this.dataFromSrv = dataFromSrv;
      console.log(this.dataFromSrv);
    });
  }

  delApartments(idRecord: number, e: Event) {

    e.stopPropagation();

    const potwierdzenie = confirm('Czy na pewno chcesz usunąć tę pozycję?');
    if (potwierdzenie) {
      this.apartamentsService.delApartaments(idRecord).subscribe(dataFromSrv => {
        this.getApartaments();
      });
    }
  }

  onClickTr() {

  }
}
