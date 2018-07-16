import { Component, OnInit } from '@angular/core';
import { SucursalesService } from '../services/sucursales.service';
import { Data } from '../models/data';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  datas: any[];
  constructor(
    public sucursalesService: SucursalesService,
    private fb: FormBuilder,
    private router: Router,
    private afStorage: AngularFireStorage) { }

  ngOnInit() {
    this.sucursalesService.getSucursales().subscribe(datas => {
      console.log(datas);
    });
  }

}
