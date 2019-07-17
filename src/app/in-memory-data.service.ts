import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { Id: 11, FirstMidName: 'Dr Nice', LastName: '' },
      { Id: 12, FirstMidName: 'Narco', LastName: '' },
      { Id: 13, FirstMidName: 'Bombasto', LastName: '' },
      { Id: 14, FirstMidName: 'Celeritas', LastName: '' },
      { Id: 15, FirstMidName: 'Magneta', LastName: '' },
      { Id: 16, FirstMidName: 'RubberMan', LastName: '' },
      { Id: 17, FirstMidName: 'Dynama', LastName: '' },
      { Id: 18, FirstMidName: 'Dr IQ', LastName: '' },
      { Id: 19, FirstMidName: 'Magma', LastName: '' },
      { Id: 20, FirstMidName: 'Tornado', LastName: '' }
    ];
    return { heroes };
  }


  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.Id)) + 1 : 11;
  }
}