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
      ],
      pv_recargaMinima: 0,
      pv_llegadaPuntoVenta: 0,
      pv_minutosEspera: '',
      pv_personasFila: 0,
      pv_calidadAtencion: '',
      pv_ventaSugestiva: '',
      pv_salida: '',
      es_aparienciaHombres: '',
      es_aparienciaMujeres: '',
      es_actitudPersonal: '',
      es_asesoriaAtencionJuegos: '',
      un_happyBirthday: false,
      un_happyKids: false,
      un_happyDivas: false,
      un_happyBirthdayAtencion: 0,
      un_happyBirthdayNegociacion: 0,
      un_happyKidsPresentacion: 0,
      un_happyDivasPresentacion: 0,
      oll_numMaquinasMal: 0,
      oll_numMaquinasMalLetrero: 0,
      oll_listaMaquinasMal: '',
      lp_numMaqSucias: 0,
      lp_listaMaqSucias: 0,
      un_happyBirthdayPresentacion: 0,
      /*
      lp_incParedesManchadas: false,
      lp_incPisoSucio: false,
      lp_incMaqSucias: false,
      lp_incMalaIluminacion: false,
      lp_incCanjeNoSurtido: false,
      lp_incNoPrecios: false,
      lp_incNoSenhal: false,
      lp_incOtros: false,
      */
      lp_incListaOtros: '',
      lp_incProRemodelacion: 0,
      lp_incProRemodelacionSenhal: 0,
      lp_incOperadoresJuegos: 0,
      c_calidadAtencion: 0,
      c_canjeEspera: 0,
      c_canjeFila: 0,
      c_canjeSalida: 0,

      com_canje: '',
      com_recepcion: '',
      com_experiencia: '',
      com_unidades: '',
      com_operatividad: ''
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
    this.dataService.setDatas(form.value);
  }
  onFileChange(event: any) {}
}
