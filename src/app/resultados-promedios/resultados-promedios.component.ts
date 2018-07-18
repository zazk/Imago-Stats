import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-resultados-promedios',
  templateUrl: './resultados-promedios.component.html',
  styleUrls: ['./resultados-promedios.component.css']
})
export class ResultadosPromediosComponent implements OnInit {
  avg: number = 0;
  datas: any[];
  prom: any;
  constructor(public dataService: DataService) {
    this.prom = {
      c_calidadAtencion: 0,
    };
  }

  ngOnInit() {
    this.dataService.getDatas().subscribe(datas => {
      this.datas = datas;
      this.averageFirst();
    });
  }

  averageFirst() {
    // Iniciar promedio
    let sum = 0;
    let count = 0;
    const arraySec = [];
    this.datas.forEach(function (d) {
      // tslint:disable-next-line:radix
      sum = sum + parseInt(d.c_calidadAtencion);
      console.log(d.c_calidadAtencion);
      count++;
      arraySec.push(d.c_calidadAtencion);
      console.log(arraySec);
    });
    this.prom.c_calidadAtencion = sum / count;
    console.log('prom array');
    console.log(this.averagingThis(arraySec));
    // console.log("sum " + sum);
    // console.log("count " + count);
    // console.log(this.avg);
    // console.log(this.averagingThis([1, 3]));
  }

  averagingThis(nmbs: number[]) {
    const sum = nmbs.reduce((previous, current) => current += previous);
    const avg = sum / nmbs.length;
    // console.log( "prom" + avg);
    return avg;
  }
}
