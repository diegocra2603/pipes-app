import { Component, OnInit } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-oredenar',
  templateUrl: './oredenar.component.html',
  styles: [
  ]
})
export class OredenarComponent implements OnInit {

  enMaysuscula:boolean = true;

  heroes:Heroe[] = [
    { nombre: 'Aquaman', vuela: true, color: Color.azul },
    { nombre: 'Batman', vuela: false, color: Color.negro },
    { nombre: 'Flash', vuela: true, color: Color.rojo },
    { nombre: 'Superman', vuela: false, color: Color.rojo},
    {nombre:'Daredevil', vuela:false, color: Color.rojo}
  ];

  ordenarPor:string = 'nombre';

  constructor() { }

  ngOnInit(): void {
  }

  cambiarMayusculas(){
    this.enMaysuscula = !this.enMaysuscula;
  }

  ordenar(campo:string){
    this.ordenarPor = campo;
  }


}
