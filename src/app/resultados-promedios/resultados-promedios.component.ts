import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-resultados-promedios',
  templateUrl: './resultados-promedios.component.html',
  styleUrls: ['./resultados-promedios.component.css']
})
export class ResultadosPromediosComponent implements OnInit {

  datas: any[];
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDatas().subscribe(datas => {
      this.datas = datas;
      console.log(datas);
      console.log(datas[0].c_calidadAtencion);
    });
    this.averagingThis([1, 3, 5]);
  }

  averagingThis(nmbs: number[]) {
    let sum = nmbs.reduce((previous, current) => current += previous);
    let avg = sum / nmbs.length;
    console.log("prom" + avg);
    return avg;
  }
}
