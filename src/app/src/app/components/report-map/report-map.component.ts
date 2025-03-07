import { Component } from "@angular/core";
import L from "leaflet";
import { inject } from "@angular/core";
import { ReportService } from "../../services/report.service";

@Component({
  selector: "app-report-map",
  imports: [],
  templateUrl: "./report-map.component.html",
  styleUrls: ["./report-map.component.css"],
  standalone: true,
})
export class ReportMapComponent {
  private reportService = inject(ReportService);

  constructor() {}

  ngOnInit(): void {
    this.reportService
      .loadGeoJson("/assets/map/reportes.geojson")
      .then((map) => {
        console.log(map);
      });
    this.initMap();
  }

  private initMap(): void {
    const map = L.map("map").setView([28.0, -15.5], 7);
    const mapPinIcon = L.icon({
      iconUrl: "assets/images/map-pin.png",
      iconSize: [25, 25],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    this.reportService
      .loadGeoJson("/assets/map/reportes.geojson")
      .then((geoJson) => {
        L.geoJSON(geoJson).addTo(map);
      });
  }
}
