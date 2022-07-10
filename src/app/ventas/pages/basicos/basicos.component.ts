import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower:string = 'diego';
  nombreUpper:string = 'DIEGO';
  nombreCompleto:string = 'DiEgO cRuZ';

  fecha: Date = new Date(); // el dia de hoy.

}
