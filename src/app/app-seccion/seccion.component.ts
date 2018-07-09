import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {
  pregunta = 'Mi nueva pregunta';
  preguntas: any[] = [
    'Nueva pregunta 1',
    'nueva pregunta 2',
    'nueva pregunta 2',
    'nueva pregunta 2',
    'nueva pregunta 2',
    'nueva pregunta 2'
  ];
  constructor() {}
  ngOnInit() {}
}
