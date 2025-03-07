import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from "primeng/menu";

@Component({
  selector: "storybook-menu",
  standalone: true,
  imports: [CommonModule, MenuModule],
  template: `
    <div class="card flex justify-center">
      <p-menu [model]="items" />
    </div>
  `,
  styleUrls: ["./menu.css"],
})
export class MenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: "New", icon: "pi pi-plus" },
      { label: "Search", icon: "pi pi-search" },
    ];
  }

}
