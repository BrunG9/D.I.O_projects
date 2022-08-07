import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  nome = 'João';
  text = '';

  usuarios = [
    {
      nome: 'Bruno',
      sobrenome: 'grassi'
    },
    {
      nome: 'Pedro',
      sobrenome: 'silva'
    },
    {
      nome: 'Silva',
      sobrenome: 'soares'
    },
    {
      nome: 'Carlos',
      sobrenome: 'pereira'
    }
  ]

  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0
    }
  ]

  constructor(private peopleService: PeopleService) {

  }
  ngOnInit(): void {
    console.log(this.usuarios);
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10) {
        clearInterval(interval);
      }
    }, 1000)
    this.getPeople();
  }

  clicou(nome: string): void {
    console.log('Clicou', nome);
  }

  getPeople(){
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }
}
