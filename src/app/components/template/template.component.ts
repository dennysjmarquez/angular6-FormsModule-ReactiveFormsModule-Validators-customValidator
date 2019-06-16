import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`

    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }

  `]
})
export class TemplateComponent {

  usuario: any = {
    nombre: null,
    apellido: null,
    sexo: 'hombre',
    email: null,
    pais: '',
    acepta: false
  };

  paises: Array<any> = [
    {
      codigo: 'CRI',
      nombre: 'Costa Rica'
    },
    {
      codigo: 'ESP',
      nombre: 'España'
    }
  ];

  sexos: any[] = [
    {'sexo': 'Hombre', 'value': 'hombre'},
    {'sexo': 'Mujer', 'value': 'mujer'},
    {'sexo': 'Sin definir', 'value': 'nodefinido'}
    ];

  constructor() {
  }

  guardar(forma: NgForm) {

    console.log('NgForm', forma);
    console.log('Valor forma', forma.value);
    console.log('Usuario', this.usuario);

    forma.reset();

  }

}
