import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav>
      <ul>
        <li *ngFor="let item of items">
          <a href="#">{{ item }}</a>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navigation.css'],
})
export class NavigationComponent {
  @Input() items: string[] = ['Item 1', 'Item 2', 'Item 3'];
}
