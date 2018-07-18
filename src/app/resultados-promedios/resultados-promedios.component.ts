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
      c_calidadAtencion: 0
    };
  }

  ngOnInit() {
    let promedio = {};
    this.dataService.getDatas().subscribe(datas => {
      this.datas = datas;
      this.averageFirst();
    });
  }

  averageFirst() {
    //Iniciar promedio
    let sum: number = 0;
    let count: number = 0;
    this.datas.forEach(function(d) {
      sum = sum + parseInt(d.c_calidadAtencion);
      console.log(d.c_calidadAtencion);
      count++;
    });
    this.prom.c_calidadAtencion = sum / count;
    console.log('sum ' + sum);
    console.log('count ' + count);
    console.log(this.avg);
    //console.log(this.averagingThis([1, 3]));
  }

  averagingThis(nmbs: number[]) {
    let sum = nmbs.reduce((previous, current) => (current += previous));
    let avg = sum / nmbs.length;
    console.log('prom' + avg);
    return avg;
  }
}
