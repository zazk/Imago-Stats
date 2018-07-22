import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { forEach } from '@angular/router/src/utils/collection';
import { ExportService } from '../services/export.service';

@Component({
  selector: 'app-resultados-sucursales',
  templateUrl: './resultados-sucursales.component.html',
  styleUrls: ['./resultados-sucursales.component.css']
})
export class ResultadosSucursalesComponent implements OnInit {
  preguntas: any = {
    pv_recargaMinima: 0,
    pv_llegadaPuntoVenta: 0,
    pv_calidadAtencion: 0,
    pv_ventaSugestiva: 0,
    pv_salida: 0,
    es_aparienciaHombres: 0,
    es_aparienciaMujeres: 0,
    es_actitudPersonal: 0,
    es_asesoriaAtencionJuegos: 0,
    un_happyBirthdayAtencion: 0,
    un_happyBirthdayNegociacion: 0,
    un_happyKidsPresentacion: 0,
    un_happyBirthdayPresentacion: 0,
    un_happyDivasPresentacion: 0,
    oll_countMaqMal: 0,
    oll_countMaqSucias: 0,
    oll_incOperadoresJuegos: 0,
    c_calidadAtencion: 0,
    c_canjeSalida: 0
  };
  datas: any[];
  datasExport: any[] = [];
  constructor(
    public dataService: DataService,
    public exportService: ExportService
  ) {}

  ngOnInit() {
    this.datas = JSON.parse(localStorage.getItem('datas')) || {};
    this.buildResults();
    this.dataService.getDatas().subscribe(datas => {
      this.datas = datas;
      this.buildResults();
      localStorage.setItem('datas', JSON.stringify(this.datas));
      console.log('DATA', this.datas);
      console.log('TOTAL SUMAS', this.preguntas);
    });
  }

  buildResults() {
    const keys: string[] = Object.keys(this.preguntas);
    this.datas.forEach((data, index) => {
      data._promedio = 0;
      this.datasExport[index] = {};
      for (const key of keys) {
        const puntos = parseInt(data[key], 10);
        this.preguntas[key] += puntos;
        data._promedio += puntos;
        this.datasExport[index][key] = puntos;
      }
      data._promedio = (data._promedio / keys.length).toFixed(2);
      console.log('DATA PROMEDIO', data._promedio, keys.length);
    });
    for (const key of keys) {
      this.preguntas[key] = (this.preguntas[key] / this.datas.length).toFixed(
        2
      );
    }
  }
  onExportResults() {
    const headers: string[] = Object.keys(this.preguntas);
    console.log('HEADERS', headers, 'DATA TO EXPORT', this.datasExport);
    this.exportService.export('resultados.csv', this.datasExport, headers);
  }
}
