import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'storybook-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dialog-container" *ngIf="isOpen">
      <div class="dialog">
        <div class="dialog-header">
          <h2>{{ title }}</h2>
          <button class="close-button" (click)="close.emit()">X</button>
        </div>
        <div class="dialog-content">
          <ng-content></ng-content>
        </div>
        <div class="dialog-footer">
          <button class="cancel-button" (click)="cancel.emit()">Cancel</button>
          <button class="confirm-button" (click)="confirm.emit()">Confirm</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./dialog.css'],
})
export class DialogComponent {
  @Input() isOpen = false;
  @Input() title = 'Dialog Title';
  @Output() close = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();
}
