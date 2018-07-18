import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class DataService {
  datasCollection: AngularFirestoreCollection<any>;
  datas: Observable<any[]>;
  dataSelected: Observable<any[]>;
  dataDoc: AngularFirestoreDocument<any>;
  constructor(public afs: AngularFirestore) {
    // Get collection
    this.datasCollection = this.afs.collection('respuestas');
    // this.tasks = this.afs.collection('tasks').valueChanges();
    this.datas = this.datasCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as any;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }
  getDatas(id?: '') {
    if (id == '') {
      return this.datas;
    } else {
    }
  }
  setDatas(data: any) {
    // Create and save example
    this.getDatas();
    return Observable.fromPromise(this.datasCollection.add(data));
  }
}
