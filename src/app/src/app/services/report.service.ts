import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor() { }

  saveReport(report: any): void {
    const reports = this.getReports();
    reports.push(report);
    localStorage.setItem('reports', JSON.stringify(reports));
  }

  getReports(): any[] {
    const reports = localStorage.getItem('reports');
    return reports ? JSON.parse(reports) : [];
  }

  async loadGeoJson(path: string): Promise<any> {
    const response = await fetch(path);
    return await response.json();
  }

 
}
