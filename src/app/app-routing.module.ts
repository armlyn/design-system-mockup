import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { provideRouter } from "@angular/router";
import { ReportFormComponent } from "./src/app/components/report-form/report-form.component";
import { ReportMapComponent } from "./src/app/components/report-map/report-map.component";


const routes: Routes = [
  { path: "report", component: ReportFormComponent },
  { path: "report-map", component: ReportMapComponent },
  { path: "", redirectTo: "/report", pathMatch: "full" }, // Ruta por defecto
  { path: "**", redirectTo: "/report" },
  // Otras rutas pueden ir aquí
];

@NgModule({
  imports: [],
  exports: [RouterModule],
  providers: [provideRouter(routes)],
})
export class AppRoutingModule {}
