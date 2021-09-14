import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];

  // heroeBorrado: string|undefined = '';
  heroeBorrado: string = '';
  
  borrarHeroe() {
    // console.log('borrando...');
    // this.heroes.splice(3, 1);
    // const heroeBorrado = this.heroes.shift() || '';
    // console.log(heroeBorrado);
    // this.heroeBorrado = heroeBorrado;
    this.heroeBorrado = this.heroes.shift() || '';

  }

}
