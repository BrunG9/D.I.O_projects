import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})
export class MarcaTextoDirective {

  @Input() corDeFundo: string = 'yellow';
  @Input() corDeTexto: string = 'white';


  constructor(private elemento: ElementRef) { }

  ngOnInit(){
    this.mudarFundo();
  }

  private mudarFundo(cor: string = 'yellow'){
    this.elemento.nativeElement.style.backgroundColor = this.corDeFundo || cor;
    this.elemento.nativeElement.style.color = this.corDeTexto;
    this.elemento.nativeElement.style.fontWeight = 'bold';
  }
}

/* <button cor="amarelo"> Clique aqui</button> */