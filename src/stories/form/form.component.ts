import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { CheckboxModule } from "primeng/checkbox";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";

@Component({
  selector: "storybook-form",
  standalone: true,
  imports: [CommonModule,FormsModule, InputTextModule, ButtonModule, CheckboxModule, CardModule],
  templateUrl: "./form.component.html",
  styleUrls: ["./form.css"],
})
export class FormComponent {
  @Input() name = "";
  @Input() email = "";

  @Output() onSubmit = new EventEmitter<{ name: string; email: string }>();
}
