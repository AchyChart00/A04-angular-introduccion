import { Component } from '@angular/core';

@Component({//Aquí
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo: string = 'Contador App';

  numero: number = 10;
  base:number=5

  acumular(valor:number){
    this.numero+=valor;
  }
/*   sumar(){
    this.numero +=1;
  }

  restar(){
    this.numero -=1;
  } */
}
