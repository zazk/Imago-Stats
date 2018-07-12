import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Data } from '../models/data';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  datas: any[];
  displayedColumns: string[] = ['item', 'cost'];
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDatas().subscribe(datas => {
      this.datas = datas;
    });
  }

}
