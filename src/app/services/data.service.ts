import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';


import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {

  datasCollection: AngularFirestoreCollection<any>;
  datas: Observable<any[]>;
  dataDoc: AngularFirestoreDocument<any>;
  constructor(public afs: AngularFirestore) {
    this.datasCollection = this.afs.collection('tasks');
    // this.tasks = this.afs.collection('tasks').valueChanges();
    this.datas = this.datasCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as any;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }
  getDatas() {
    return this.datas;
  }


}
