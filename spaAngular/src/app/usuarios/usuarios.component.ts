import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'spa-home',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.css']
  })
export class UsuariosComponent implements OnInit{

    constructor() { }

    /* listaUsuarios: usuarios[] = [
        { nome: 'Camila', email: 'camila.taruma@gmail.com'},
        { nome: 'Teste', email: 'Teste@gmail.com'},
        { nome: 'Teste 2', email: 'Teste2@gmail.com'},
        { nome: 'Teste 3', email: 'Teste3@gmail.com' }
      ]; */

    ngOnInit(): void {
    }

}