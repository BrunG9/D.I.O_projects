import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName: 'Bruno',
        lastName: 'grassi',
        age: 21
      },
      {
        firstName: 'Carlos',
        lastName: 'Albani',
        age: 20
      },
      {
        firstName: 'Joao',
        lastName: 'Pedro',
        age: 25
      },
      {
        firstName: 'Carlos',
        lastName: 'silva',
        age: 30
      }
    ]

    return of(peopleArray);
  }
}
