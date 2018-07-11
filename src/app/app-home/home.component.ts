import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Data } from '../models/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = new Data;
  constructor(public dataService: DataService) { }
  images = [{ value: 'word1.jpg' }, { value: 'word2.jpg' }, { value: '' }];

  add() {
    this.images.push({ value: '' });
  }
  ngOnInit() {
    this.dataService.getDatas().subscribe(datas => {
      console.log(datas);
    });
  }
  onSubmit() {
    console.log("test");
    this.dataService.setDatas();
  }
}
