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
  form: FormGroup;
  sucursales: any[];
  constructor(
    public sucursalesService: SucursalesService,
    private fb: FormBuilder,
    private router: Router,
    private afStorage: AngularFireStorage) {
    this.form = fb.group({
      nombre: '',
    });
  }

  buildParam(param: any[], arr: any[]) {
    return param.map((checked, i) => ({
      id: arr[i].value,
      selected: checked
    }));
  }

  ngOnInit() {
    this.sucursalesService.getSucursales().subscribe(sucursales => {
      this.sucursales = sucursales;
    });
  }

  onSubmit(form: any) {
    const obj = Object.assign({}, form.value);
    this.sucursalesService.setSucursales(obj).subscribe(r => {
      console.log('R', r);
    });
  }
}
