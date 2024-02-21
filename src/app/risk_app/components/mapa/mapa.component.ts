import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'risk-mapa',
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.scss'
})
export class MapaComponent {


  arrayPaises: string[]=["nordAmerica","europa","africa","sudAmerica","asia","oceania"];


  arrayPaisesPosibleAtaque: string[]=[];

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
      this.arrayPaisesPosibleAtaque = arrayModificado2;
      console.log("Array Modificado 2:", arrayModificado2);

      nuevoArrayPaises.forEach((e)=>{
      const elementos = document.getElementsByClassName(e);
        for (let i = 0; i < elementos.length; i++) {
          const elemento = elementos[i];
          this.renderer.setStyle(elemento, 'fill', '#363636');
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
    }else{
    }






  }


  // @ts-ignore
  puedeAtacar(zona){

    switch (zona){
      case "nordAmerica":
        this.editMode(["europa","sudAmerica","asia"])
        break;
      case "europa":
        this.editMode(["nordAmerica","africa","asia"])
        break;
      case "oceania":
        this.editMode(["sudAmerica","africa","asia"])
        break;
      case "africa":
        this.editMode(["europa","oceania","asia","sudAmerica"])
        break;
      case "sudAmerica":
        this.editMode(["nordAmerica","oceania","africa"])
        break;
      case "asia":
        this.editMode(["europa","nordAmerica","oceania","africa"]);
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
          // Aplicar estilos predeterminados o eliminar el estilo en línea
          elemento.style.removeProperty('fill');
          elemento.removeEventListener('click', (event) => this.ataque(e));}
      });
      // Restaurar el estado de edición a false
      this.edit = false;
    }
  }


  ataque(zona: string){
    console.log("entro en ataque")
    switch (zona){
      case "nordAmerica":
        alert("ataco");
        //aqui tendre que cancelar el ataque
        break;
      case "europa":
        alert("ataco");
        //aqui tendre que cancelar el ataque
        break;
      case "oceania":
        alert("ataco");
        //aqui tendre que cancelar el ataque
        break;
      case "africa":
        alert("ataco");
        //aqui tendre que cancelar el ataque
        break;
      case "sudAmerica":
        alert("ataco");
        //aqui tendre que cancelar el ataque
        break;
      case "asia":
        alert("ataco");
        //aqui tendre que cancelar el ataque
        break;
    }



  }

}
