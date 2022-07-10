import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre:string = 'Susana';
  genero:string = 'Femenino';

  invitacionMapa = {
    'Masculino': 'invitarlo',
    'Femenino': 'invitarlo'
  }

  clientes:string[] = ['Susana', 'Juan', 'Pedro', 'Maria', 'Pablo'];
  clientesMapa = {
    '=0': 'no hay clientes esperando ',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando.',
  }

  persona = {
    nombre: 'Susana',
    apellido: 'Perez',
    edad: '25',
    genero: 'Femenino',
    invitacion: 'invitarlo',
  }

  heroes = [
    {nombre: 'Aquaman', poder: 'El poder del agua'},
    {nombre: 'Batman', poder: 'El poder de batiseñal'},
    {nombre: 'Flash', poder: 'El poder de supervelocidad'},
    {nombre: 'Green Lantern', poder: 'El poder de verde'},
    {nombre: 'Superman', poder: 'El poder de luz'},
  ];

  cambiarCliente(){
    this.nombre = 'Juan';
    this.genero = 'Masculino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 3500);
  });

}
