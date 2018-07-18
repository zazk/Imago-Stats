import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado-sucursal',
  templateUrl: './resultado-sucursal.component.html',
  styleUrls: ['./resultado-sucursal.component.css']
})
export class ResultadoSucursalComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const codigo = params['codigo'];
      console.log('test');
      console.log(codigo);
    });
  }

}
