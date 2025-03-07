import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardModule } from "primeng/card";

@Component({
  selector: "storybook-card",
  standalone: true,
  imports: [CommonModule, CardModule],
  template: `<p-card header="Simple Card">
    <p class="m-0">Lorem ipsum dolor sit amet...</p>
  </p-card>`,
  styleUrls: ["./card.css"],
})
export class CardComponent {

}
