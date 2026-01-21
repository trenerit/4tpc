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
    @Output() close = new EventEmitter<void>();
    @Output() refreshData = new EventEmitter<void>();

    constructor(
        private readonly aparmentsService: ApartamentsService
    ) {}

    closeModal() {
        this.close.emit();
    }

    stopPropagation(event: Event) {
        event.stopPropagation();
    }

    myFormSubmit(data: NgForm): any {
       this.aparmentsService.addApartament(data.value).subscribe(() => {
        this.refreshData.emit();
        this.close.emit();
       })
    }
}
