import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-resultados-promedios',
  templateUrl: './resultados-promedios.component.html',
  styleUrls: ['./resultados-promedios.component.css']
})
export class ResultadosPromediosComponent implements OnInit {

  avg: number;
  datas: any[];
  promedios: {
    c_calidadAtencion: number;
  };
  constructor(public dataService: DataService) { }

  ngOnInit() {
    let promedios = {};
    this.dataService.getDatas().subscribe(datas => {
      this.datas = datas;
      let sum: number = 0;
      let count: number = 0;
      this.datas.forEach(function (d) {
        sum = sum + d.c_calidadAtencion;
        console.log(d.c_calidadAtencion);
        count++;
      });
      this.avg = sum / count;
      console.log("sum " + sum);
      console.log("count " + count);
      console.log(this.avg);
    });

    //console.log(this.averagingThis([1, 3]));

  }

  averagingThis(nmbs: number[]) {
    let sum = nmbs.reduce((previous, current) => current += previous);
    let avg = sum / nmbs.length;
    console.log("prom" + avg);
    return avg;
  }
}
