import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { DataModel } from '../../models/data-model';
import { ApartamentsService } from '../apartaments-service';
import { RouterLink } from "@angular/router";
import { ApartamentAddModal } from '../apartament-add-modal/apartament-add-modal';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [RouterLink, DecimalPipe, ApartamentAddModal, CommonModule, FormsModule],
  templateUrl: './main.html',
  styleUrl: 'main.scss',
})
export class Main {

  dataFromSrv: DataModel[] = [];
  descriptionSearchProperty = '';
  descriptionCityProperty = '';

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
      this.apartamentsService.delApartaments(idRecord).subscribe(() => {
        this.getApartaments();
      });
    }
  }
  
  isId = 0;
  itemObj = {};

  modApartments(itemObj: DataModel, e: Event) {
    e.stopPropagation();

    this.itemObj = itemObj;

    this.openModal();
   
  }

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.itemObj = {};
    this.isModalOpen = false;
  }

  search(nameColumn: string , inputNameText2: NgForm): any {

    let inputNameText;
    
    if(nameColumn == 'city') {
      inputNameText = inputNameText2.value.citySearch;
    } else {
      inputNameText = inputNameText2.value.descriptionSearch;
    }
    
    const queryData = {column: nameColumn, partQuery: inputNameText};

    if(queryData.partQuery.length == 0) {
      this.getApartaments();
    } else {
      this.apartamentsService.search(queryData).subscribe((data: any) => {
        this.dataFromSrv = data;
      });
    }
  }

  clearInputs() {
    this.descriptionSearchProperty = '';
    this.descriptionCityProperty = '';
    this.getApartaments();
  }
}