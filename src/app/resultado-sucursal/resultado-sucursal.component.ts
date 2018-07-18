import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Text } from '@angular/compiler';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-resultado-sucursal',
  templateUrl: './resultado-sucursal.component.html',
  styleUrls: ['./resultado-sucursal.component.css']
})
export class ResultadoSucursalComponent implements OnInit {
  idActual: any;
  datas: any[];
  data: any;
  constructor(
    private route: ActivatedRoute,
    public dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const codigo = params['codigo'];
      this.idActual = codigo;
    });
    this.dataService.getDatas().subscribe(datas => {
      console.log(datas);
      this.datas = datas;
      console.log("this.datas ");
      console.log(this.datas);
      console.log("this.datas ");

      console.log(this.datas);
      let data = {};
      let idActual = this.idActual;
      this.datas.forEach(function (d, index) {
        if (d.id == idActual) {
          data = d;
        }
      });
      this.data = data;
      console.log('Array Filtrado\n', data);
    });


  }

}
