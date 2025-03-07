import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-container" *ngIf="isOpen">
      <div class="modal">
        <div class="modal-header">
          <h2>{{ title }}</h2>
          <button class="close-button" (click)="close.emit()">X</button>
        </div>
        <div class="modal-content">
          <ng-content></ng-content>
        </div>
        <div class="modal-footer">
          <button class="cancel-button" (click)="cancel.emit()">Cancel</button>
          <button class="confirm-button" (click)="confirm.emit()">Confirm</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./modal.css'],
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = 'Modal Title';
  @Output() close = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();
}
