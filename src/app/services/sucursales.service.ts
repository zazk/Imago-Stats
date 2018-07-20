import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class SucursalesService {
  sucursalesCollection: AngularFirestoreCollection<any>;
  sucursalDocument: AngularFirestoreDocument<any>;
  sucursales: Observable<any[]>;
  sucursal: any;
  constructor(public afs: AngularFirestore) {
    // Get collection
    this.sucursalesCollection = this.afs.collection('sucursales');
    this.sucursalDocument = this.afs.collection('sucursales').doc('8ecRQBFxfpTf8WTQYZ0L');

    // this.tasks = this.afs.collection('tasks').valueChanges();
    this.sucursales = this.sucursalesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as any;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    this.sucursal = this.sucursalDocument.ref.get().then(function (doc) {
      if (doc.exists) {
        return doc.data();
      } else {
        return 'Doesnt exist';
      }
    }).catch(function (error) {
      return error;
    });
  }
  getSucursales() {
    return this.sucursales;
  }
  setSucursales(data: any) {
    // Create and save
    this.getSucursales();
    return Observable.fromPromise(this.sucursalesCollection.add(data));
  }
  getSucursal() {
    return this.sucursal;
  }

}
