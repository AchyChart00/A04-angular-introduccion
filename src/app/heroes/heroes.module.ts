import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core"; 
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({

    //Aquí se incluyen los componentes TypeScript
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //Aquí se declaran las clases TS todo lo que quiero que sea visible fuera del modulo
    exports:[
        ListadoComponent
    ],
    //aquí van todos los modulos
    imports:[
        //Es importante importar esta clase ya que nos permite usar el *ngIf, *ngFor, etc.
        CommonModule
    ]

})
export class HeroesModule{

}