import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-apartament-add-modal',
    standalone: true,
    imports: [],
    templateUrl: './apartament-add-modal.html',
    styleUrl: './apartament-add-modal.scss'
})
export class ApartamentAddModal {
    @Input() isOpen = false;
    @Output() close = new EventEmitter<void>();

    closeModal() {
        this.close.emit();
    }

    stopPropagation(event: Event) {
        event.stopPropagation();
    }
}
