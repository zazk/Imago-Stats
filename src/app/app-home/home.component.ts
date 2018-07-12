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
      unidades: '',
      unidadesnegocio: [
        {
          title: '*Happy Birthday (área de cumpleaños)',
          value: 1,
          checked: false
        },
        {
          title: '*Happy Kids',
          value: 2,
          checked: false
        },
        {
          title: '*Happy Divas',
          value: 3,
          checked: false
        }
      ],
      incidencias: [
        {
          title: 'Paredes manchadas',
          value: 1,
          checked: false
        },
        {
          title: 'Pisos sucios o con basura.',
          value: 2,
          checked: false
        },
        {
          title: 'Máquinas sucias/en mal estado',
          value: 3,
          checked: false
        },
        {
          title: 'Mala iluminación.',
          value: 3,
          checked: false
        },
        {
          title:
            'Canje no está surtido con productos de diferente valor en tickets.',
          value: 3,
          checked: false
        },
        {
          title:
            'Happy Sweet: Sin precios puestos o no está surtido de productos como: pop corn, churros, hotdogs).',
          value: 3,
          checked: false
        },
        {
          title: 'Local no tiene señaletica de seguridad.',
          value: 3,
          checked: false
        },
        {
          title:
            'Otros (desperdicios, cajas, bolsas, equipos de limpieza, etc.arrinconados por el local)',
          value: 3,
          checked: false
        }
      ]
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
    // this.dataService.setDatas(form.value);
  }
  onFileChange(event: any) {}
}
