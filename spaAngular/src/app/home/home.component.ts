import { Component, OnInit } from '@angular/core';
import { alunos } from '../model/alunos'
import { usuarios } from '../model/usuarios';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor!: number;
  exibeTabela:  boolean = false;

  listaAlunos: alunos[] = [
    { nome: 'Camila', idade: 27, email: 'camila.taruma@gmail.com', curso: 'Ciencia da Computacao' },
    { nome: 'Teste', idade: 25, email: 'Teste@gmail.com', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'Teste 2', idade: 31, email: 'Teste2@gmail.com', curso: 'Engenharia da computacao' },
    { nome: 'Teste 3', idade: 45, email: 'Teste3@gmail.com', curso: 'Sistemas da informacao' }
  ];

  listaUsuarios: usuarios[] = [
    { nome: 'Bruno', email: 'Bruno.dio@gmail.com'},
    { nome: 'Pedro', email: 'Pedro.dio@gmail.com'},
    { nome: 'Carlos', email: 'Carlos.dio@gmail.com'},
    { nome: 'José', email: 'José.dio@gmail.com' }
  ];
  
  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }

}