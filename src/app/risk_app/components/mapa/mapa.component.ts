import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'risk-mapa',
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.scss'
})
export class MapaComponent {

  arrayPaises: string[]=["nordAmerica","europa","africa","sudAmerica","asia","oceania"]

  edit = false;

  editMode(paises: string[]) {
    if(!this.edit){
      // Filtrar los países que no están presentes en el array 'paises'
      const nuevoArrayPaises = this.arrayPaises.filter(pais => !paises.includes(pais));

      // 'nuevoArrayPaises' ahora contiene los países modificados
      console.log("Array original:", this.arrayPaises);
      console.log("Copia modificada:", nuevoArrayPaises);
      // Crear arrayModificado2 con los países restantes
      const arrayModificado2 = this.arrayPaises.filter(pais => paises.includes(pais));
      console.log("Array Modificado 2:", arrayModificado2);

      nuevoArrayPaises.forEach((e)=>{
      const elementos = document.getElementsByClassName(e);
        for (let i = 0; i < elementos.length; i++) {
          const elemento = elementos[i];
          this.renderer.setStyle(elemento, 'fill', 'darkgrey');
          // Añade más modificaciones de estilo según necesites
        }
      })
      arrayModificado2.forEach((e)=>{
        const elementos = document.getElementsByClassName(e);
        for (let i = 0; i < elementos.length; i++) {
          const elemento = elementos[i];
          this.renderer.setStyle(elemento, 'fill', 'white');
          // Añade más modificaciones de estilo según necesites
          elemento.addEventListener('click', (event) => this.ataque(e));        }
      })


      // Aquí puedes hacer lo que necesites con la copia modificada
      this.edit = true;
    }






  }


  // @ts-ignore
  puedeAtacar(zona){

    switch (zona){
      case "nordAmerica":
        console.log(zona);
        this.editMode(["europa","asia","sudAmerica"]);
        break;
      case "europa":
        console.log(zona);
        break;
      case "oceania":
        console.log(zona);
        break;
      case "africa":
        console.log(zona);
        break;
      case "sudAmerica":
        console.log(zona);
        break;
      case "asia":
        console.log(zona);
        break;
    }


  }

  constructor(private renderer: Renderer2) {
  }

  cancelarAtaque() {
    if (this.edit) {
      // Obtener todos los elementos modificados y aplicar los estilos por defecto
      this.arrayPaises.forEach((e) => {
        const elementos = document.getElementsByClassName(e) as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < elementos.length; i++) {
          const elemento = elementos[i];
          console.log(elemento);
          // Aplicar estilos predeterminados o eliminar el estilo en línea
          elemento.style.removeProperty('fill');
          elemento.removeEventListener('click', (event) => this.ataque(e));}
      });
      // Restaurar el estado de edición a false
      this.edit = false;
    }
  }

  ataque(zona: string){

    switch (zona){
      case "nordAmerica":
        console.log(zona);
        this.cancelarAtaque()
        break;
      case "europa":
        console.log(zona);
        this.cancelarAtaque()
        break;
      case "oceania":
        console.log(zona);
        this.cancelarAtaque()
        break;
      case "africa":
        console.log(zona);
        this.cancelarAtaque()
        break;
      case "sudAmerica":
        console.log(zona);
        this.cancelarAtaque()
        break;
      case "asia":
        console.log(zona);
        this.cancelarAtaque()
        break;
    }



  }

}
