import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-resultados-sucursales',
  templateUrl: './resultados-sucursales.component.html',
  styleUrls: ['./resultados-sucursales.component.css']
})
export class ResultadosSucursalesComponent implements OnInit {

  datas: any[];
  constructor(public dataService: DataService) { }


  ngOnInit() {
    this.dataService.getDatas().subscribe(datas => {
      this.datas = datas;
    });
  }

}
