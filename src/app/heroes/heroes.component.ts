import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  student: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getStudent();
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  getStudent(): void{
    this.heroService.getStudent(1)
    .subscribe(student => this.student = student);
  }
  add(FirstMidName: string): void {
    FirstMidName = FirstMidName.trim();
    if (!FirstMidName) { return; }
    this.heroService.addHero({ FirstMidName } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}