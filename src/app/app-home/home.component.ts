import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Data } from '../models/data';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { unidadadesNegocio, incidenciasLocal } from '../models/unidades';
import { AngularFireStorage } from 'angularfire2/storage';
import { map } from '@firebase/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = new Data();
  form: FormGroup;
<<<<<<< HEAD
  date = this.catchDate();
  now = this.catchTime();
=======
  ref: any;
  task: any;
  uploadProgress: any;
>>>>>>> 4c8963c2bfca9bd33563bf6395815dba59b98bb4
  public unidades = unidadadesNegocio;
  public incidencias = incidenciasLocal;
  constructor(
    public dataService: DataService,
    private fb: FormBuilder,
    private router: Router,
    private afStorage: AngularFireStorage
  ) {
    this.form = fb.group({
      puntoVenta: 0,
      recargaMinima: 0,
      operatividad: '',
      canje: '',
      recepcion: '',
      experiencia: '',
      unidades: '',
      unidadescheck: null,
      unidadesnegocio: this.buildCheckboxes(unidadadesNegocio),
      incidencias: this.buildCheckboxes(incidenciasLocal),
      sucursal: '',
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
      un_happyBirthdayAtencion: 0,
      un_happyBirthdayNegociacion: 0,
      un_happyKidsPresentacion: 0,
      un_happyBirthdayPresentacion: 0,
      un_happyDivasPresentacion: 0,
      oll_countMaqMal: 0,
      oll_numMaqMal: 0,
      oll_countMaqMalLetrero: 0,
      oll_numMaqMalLetrero: 0,
      oll_listaMaqMal: '',
      oll_countMaqSucias: 0,
      oll_numMaqSucias: 0,
      oll_listaMaqSucias: '',
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
      oll_numInc: 0,
      oll_incListaOtros: '',
      oll_incProRemodelacion: 0,
      oll_incProRemodelacionSenhal: 0,
      oll_incOperadoresJuegos: 0,
      c_calidadAtencion: 0,
      c_canjeEspera: 0,
      c_canjeFila: 0,
      c_canjeSalida: 0,

      com_canje: '',
      com_recepcion: '',
      com_experiencia: '',
      com_unidades: '',
      com_operatividad: '',

      fe_realizacion: this.date,
      fe_horaEntrada: this.now,
      fe_horaSalida: '',
      fe_local: '',
      fe_evaluador: '',

      col_nomCaja: '',
      col_descCaja: '',
      col_nomJuegos: '',
      col_descJuegos: '',
      col_nomCumple: '',
      col_descCumple: '',
      col_nomCanje: '',
      col_descCanje: '',
    });
  }
  ngOnInit() {
    this.dataService.getDatas().subscribe(datas => {
      console.log(datas);
    });
  }
  get unidadesnegocio(): FormArray {
    return this.form.get('unidadesnegocio') as FormArray;
  }
  get incidenciaslocal(): FormArray {
    return this.form.get('incidencias') as FormArray;
  }

  buildCheckboxes(objs: any[]): FormArray {
    const arr = objs.map(skill => {
      return this.fb.control(skill.checked);
    });
    return this.fb.array(arr);
  }

  buildParam(param: any[], arr: any[]) {
    return param.map((checked, i) => ({
      id: arr[i].value,
      selected: checked
    }));
  }

  catchTime() {
    let d = new Date();
    let n = d.getTime();
    return n;
  }
  catchDate() {
    let d = new Date();
    let dd = d.getDate();
    let mm = d.getMonth() + 1; //January is 0!
    let yyyy = d.getFullYear();
    let today = '';
    today = mm + '/' + dd + '/' + yyyy;
    return today;
  }

  onSubmit(form: any) {
    const { unidadesnegocio, incidencias } = form.value;
    console.log(form.value, form.value['unidades']);
    const obj = Object.assign({}, form.value, {
      unidadesnegocio: this.buildParam(unidadesnegocio, this.unidades),
      incidencias: this.buildParam(incidencias, this.incidencias)
    });
    this.dataService.setDatas(obj).subscribe(r => {
      console.log('R', r);
      this.router.navigate(['/pull-saved']);
    });
  }
  onFileChange(event: any) { }
  public upload(event) {
    // create a random id
    const randomId = Math.random()
      .toString(36)
      .substring(2);
    // create a reference to the storage bucket location
    this.ref = this.afStorage.ref(randomId);
    // the put method creates an AngularFireUploadTask
    // and kicks off the upload
    this.task = this.ref.put(event.target.files[0]);

    this.uploadProgress = this.task.snapshotChanges();
  }
}
