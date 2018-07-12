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
      pv_recargaMinima: 0,
      pv_llegadaPuntoVenta: 0,
      pv_minutosEspera: 0,
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
      un_happyBirthdayPresentacion: 0,
      un_happyBirthdayAtencion: 0,
      un_happyBirthdayNegociacion: 0,
      un_happyKidsPresentacion: 0,
      un_happyDivasPresentacion: 0,
      oll_numMaquinasMal: 0,
      oll_numMaquinasMalLetrero: 0,
      oll_listaMaquinasMal: '',
      lp_numMaqSucias: 0,
      lp_listaMaqSucias: 0,
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

      com_canje: '',
      com_recepcion: '',
      com_experiencia: '',
      com_unidades: '',
      com_operatividad: '',

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
  onFileChange(event: any) { }
}
