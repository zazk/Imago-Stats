import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  @Input() pregunta: String = '';
  respuestas: any[] = [
    'Nueva respuesta 1',
    'nueva respuesta 2',
    'nueva respuesta 3',
    'nueva respuesta 4',
  ];
  constructor() { }

  ngOnInit() { }
}
