import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { DataService } from '../services/data.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  constructor(public DataService: any) {

  }
  images = [{ value: 'word1.jpg' }, { value: 'word2.jpg' }, { value: '' }];

  add() {
    this.images.push({ value: '' });
  }

  ngOnInit() {
    this.DataService.getDatas().suscribe(datas => {
      console.log(datas);
    })
  }
}
