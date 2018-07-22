import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { SucursalesService } from '../services/sucursales.service';
import { Data } from '../models/data';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { unidadadesNegocio, incidenciasLocal } from '../models/unidades';
import { AngularFireStorage } from 'angularfire2/storage';
import { encuesta } from '../models/encuesta';
import { finalize } from 'rxjs/operators';
import { Observable } from '../../../node_modules/@firebase/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sucursales: any[];
  data = new Data();
  form: FormGroup;
  date = this.catchDate();
  now = this.catchTime();
  ref: any[];
  tasks: any[] = [];
  uploadProgress: any[] = [];
  downloadURL: Observable<string>[] = [];
  files: any[] = [];
  public unidades = unidadadesNegocio;
  public incidencias = incidenciasLocal;
  constructor(
    public dataService: DataService,
    public sucursalesService: SucursalesService,
    private fb: FormBuilder,
    private router: Router,
    private afStorage: AngularFireStorage
  ) {
    encuesta.unidadesnegocio = this.buildCheckboxes(unidadadesNegocio);
    encuesta.incidencias = this.buildCheckboxes(incidenciasLocal);
    this.form = fb.group(encuesta);
  }
  ngOnInit() {
    this.dataService.getDatas().subscribe(datas => {
      console.log(datas);
    });
    this.sucursalesService.getSucursales().subscribe(sucursales => {
      console.log(sucursales);
      this.sucursales = sucursales;
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
    const d = new Date();
    const n = d.getTime();
    return n;
  }
  catchDate() {
    const d = new Date();
    const dd = d.getDate();
    const mm = d.getMonth() + 1; // January is 0!
    const yyyy = d.getFullYear();
    let today = '';
    today = mm + '/' + dd + '/' + yyyy;
    return today;
  }

  onSubmit(form: any) {
    const { unidadesnegocio, incidencias } = form.value;
    console.log(form.value, form.value['unidades']);
    console.log('DONWLOAD URL', this.downloadURL);
    const obj = Object.assign({}, form.value, {
      unidadesnegocio: this.buildParam(unidadesnegocio, this.unidades),
      incidencias: this.buildParam(incidencias, this.incidencias),
      images: this.files
    });
    this.dataService.setDatas(obj).subscribe(r => {
      console.log('R', r);
      this.router.navigate(['/pull-saved']);
    });
  }
  onFileChange(event: any) {}
  public upload(event) {
    this.tasks = [];
    this.uploadProgress = [];
    this.downloadURL = [];
    this.ref = [];
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.ref[i] = this.afStorage.ref(this.randomId);
      this.tasks[i] = this.ref[i].put(files[i]);
      this.uploadProgress[i] = this.tasks[i].percentageChanges();
      this.downloadURL[i] = this.tasks[i].downloadURL();
      this.downloadURL[i].subscribe(fileURL => {
        this.files[i] = fileURL;
      });
      this.tasks[i]
        .snapshotChanges()
        .pipe(
          finalize(() => (this.downloadURL[i] = this.ref[i].getDownloadURL()))
        )
        .subscribe();
    }
  }

  get randomId() {
    return Math.random()
      .toString(36)
      .substring(2);
  }
}
