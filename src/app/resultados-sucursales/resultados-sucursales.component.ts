import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { forEach } from '@angular/router/src/utils/collection';

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
  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDatas().subscribe(datas => {
      this.datas = datas;
      const keys: string[] = Object.keys(this.preguntas);
      this.datas.forEach(data => {
        data._promedio = 0;
        for (const key of keys) {
          const puntos = parseInt(data[key], 10);
          this.preguntas[key] += puntos;
          data._promedio += puntos;
        }
        data._promedio = data._promedio / keys.length;
        console.log('DATA PROMEDIO', data._promedio, keys.length);
      });
      for (const key of keys) {
        this.preguntas[key] = this.preguntas[key] / this.datas.length;
      }
      console.log('DATA', this.datas);
      console.log('TOTAL SUMAS', this.preguntas);
    });
  }
}
