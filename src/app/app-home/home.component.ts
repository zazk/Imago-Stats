import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Data } from '../models/data';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = new Data();
  form: FormGroup;

  constructor(public dataService: DataService, fb: FormBuilder) {
    this.form = fb.group({
      puntoVenta: 0,
      recargaMinima: 0,
      operatividad: '',
      canje: '',
      recepcion: '',
      experiencia: '',
      unidades: ''
    });
  }
  images = [{ value: 'word1.jpg' }, { value: 'word2.jpg' }, { value: '' }];

  add() {
    this.images.push({ value: '' });
  }
  ngOnInit() {
    this.dataService.getDatas().subscribe(datas => {
      console.log(datas);
    });
  }
  onSubmit(form: any) {
    console.log('test', form.value);
    // this.dataService.setDatas({ any: 1 });
  }
  onFileChange(event: any) {}
}
