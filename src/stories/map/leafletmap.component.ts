import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as L from "leaflet";

@Component({
  selector: "app-leaflet-map",
  templateUrl: "./leafletmap.component.html",
  styleUrls: ["./leafletmap.css"],
})
export class LeafletMapComponent implements OnInit, AfterViewInit {
  private map!: L.Map;
  private initialZoom: number = 7;
  markers: L.Marker[] = [
    L.marker([28.0, -15.5]).bindPopup("Islas Canarias").openPopup(),
  ];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initMap();
    this.centerMap();
    this.addMarkerWithCustomIcon();
  }

  private initMap() {
    const baseMapURl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    this.map = L.map("map").setView([28.0, -15.5], this.initialZoom);

    L.tileLayer(baseMapURl).addTo(this.map);
  }

  private centerMap() {
    // Create a boundary based on the markers
    const bounds = L.latLngBounds(
      this.markers.map((marker) => marker.getLatLng())
    );

    // Fit the map into the boundary
    this.map.fitBounds(bounds);
  }

  private addMarkerWithCustomIcon() {
    // Define el icono personalizado
    const mapPinIcon = L.icon({
      iconUrl: "assets/images/map-pin.png", // Ruta a tu icono personalizado
      iconSize: [25, 25], // Tamaño del icono
      iconAnchor: [12, 41], // Punto del icono que se colocará en la ubicación del marcador
      popupAnchor: [1, -34], // Punto desde el que se abrirá el popup relativo al icono
    });

    // Crear un marcador con el icono personalizado
    const marker = L.marker([28.0, -15.5], { icon: mapPinIcon })
      .bindPopup(
        `
        <div>
          <strong>Reporte</strong><br/>
          Más información: <a href="https://www3.gobiernodecanarias.org/cptss/sostenibilidad/biodiversidad/redexos/app/guide/species/Cenchrus-setaceus" target="_blank">Cenchrus setaceus</a>
        </div>
      `
      )
      .openPopup();

    this.markers.push(marker);
    marker.addTo(this.map);
  }
}
