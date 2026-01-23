import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DataModel } from '../../models/data-model';
import { ApartamentsService } from '../apartaments-service';

@Component({
    selector: 'app-apartament-add-modal',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './apartament-add-modal.html',
    styleUrl: './apartament-add-modal.scss'
})
export class ApartamentAddModal {
    @Input() isOpen = false;
    @Input() itemObj?: any;
    @Output() close = new EventEmitter<void>();
    @Output() refreshData = new EventEmitter<void>();

    compare = true;

    constructor(
        private readonly aparmentsService: ApartamentsService
    ) {}

    closeModal() {
        this.close.emit();
        this.refreshData.emit();
        this.compare = true;
    }

    stopPropagation(event: Event) {
        event.stopPropagation();
    }

    myFormSubmit(data: NgForm): any {
        this.compare = true;
        if(this.itemObj.id > 0) {
            data.value.id = this.itemObj.id;
            this.aparmentsService.modApartament(data.value).subscribe(() => {
                this.closeModal();
            })
            return;
        }
        this.aparmentsService.addApartament(data.value).subscribe(() => {
            this.closeModal();
       })

    }

    cutObject = {};
    counter = 0;

    keyDownInput() {
        this.counter++;

        if(this.counter > 1) return;
        this.cutObject = JSON.stringify({
            city: this.itemObj.city,
            price: this.itemObj.price
        })
    }

    verifyObjs(data: NgForm) {

        console.log(this.counter);
        const obj1 = this.cutObject;
        const obj2 = JSON.stringify(data.value);

        if(data.value.city.length == 0 || data.value.price.length == 0) {
            this.compare = true;
        } else {
            if(obj1 != obj2) {
                this.compare = false;
            } else {
                this.compare = true;
            }
        }


    }

    // removeInputs() {
    //     this.myForm.city = ''
    // }

}
