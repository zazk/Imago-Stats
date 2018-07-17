import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-resultados-sucursales',
  templateUrl: './resultados-sucursales.component.html',
  styleUrls: ['./resultados-sucursales.component.css']
})
export class ResultadosSucursalesComponent implements OnInit {
  sumas: any = { c_calidadAtencion: 0 };
  datas: any[];
  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDatas().subscribe(datas => {
      this.datas = datas;
      this.datas.forEach(data => {
        this.sumas.c_calidadAtencion += parseInt(data.c_calidadAtencion, 10);
        console.log('CALIDAD ATENCION', data.c_calidadAtencion);
      });
      this.sumas.c_calidadAtencion =
        this.sumas.c_calidadAtencion / this.datas.length;
      console.log(datas);
      console.log('TOTAL SUMAS', this.sumas);
    });
  }
}
