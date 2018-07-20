import { Component, OnInit } from '@angular/core';
import { SucursalesService } from '../services/sucursales.service';
import { Data } from '../models/data';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {
  form: FormGroup;
  sucursal: any[];
  constructor(
    public sucursalesService: SucursalesService,
    private fb: FormBuilder,
    private router: Router,
    private afStorage: AngularFireStorage) {
    this.form = fb.group({
      nombre: '',
    });
  }

  ngOnInit() {
    console.log(this.sucursalesService.getSucursal());
    console.log(this.sucursalesService.getSucursales());
  }
  onSubmit() {
    console.log('submit');
  }

}
