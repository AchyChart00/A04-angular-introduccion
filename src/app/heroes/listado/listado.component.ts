import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes:string[] = ["Spiderman", "Thorn", "Hulk"];
  //heroeBorrado:string| undefined="";
  //esta condicion la detecta por ddefecto el sistema
  //heroeBorrado:string=""||undefine||null ||false;
  heroeBorrado:string="";

  borrarHeroe(){
     this.heroeBorrado = this.heroes.shift() || "";
    
  }

}
