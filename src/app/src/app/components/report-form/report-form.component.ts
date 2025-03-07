import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
// Importa PrimeNG
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { TextareaModule } from "primeng/textarea";
import { CheckboxModule } from "primeng/checkbox";
import { ButtonModule } from "primeng/button";


@Component({
  selector: "app-formulario",
  templateUrl: "./report-form.component.html",
  styleUrls: ["./report-form.component.css"],
    imports: [
      ReactiveFormsModule,
      CalendarModule,
      DropdownModule,
      InputTextModule,
      TextareaModule,
      CheckboxModule,
      ButtonModule,
    ],
})
export class ReportFormComponent implements OnInit {
  form: FormGroup;
  sistemasCoordenadas = ["Geográficas (EPSG:4326)"];
  municipios = ["Seleccionar"];
  tiposContacto = ["Capturada"];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fecha: [new Date(), Validators.required],
      sistemaCoordenadas: ["", Validators.required],
      latitud: ["", Validators.required],
      longitud: ["", Validators.required],
      municipio: ["", Validators.required],
      lugar: ["", Validators.required],
      cantidad: [1, Validators.required],
      tipoContacto: ["", Validators.required],
      descripcion: ["", Validators.required],
      reportePrivado: [false],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.valid) {
      console.log("Form Submitted!", this.form.value);
    }
  }
}
