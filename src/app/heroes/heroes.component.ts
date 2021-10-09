import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', // Components CSS element selector
  templateUrl: './heroes.component.html', // Location of the component's template file
  styleUrls: ['./heroes.component.css'], // Location of comp private CSS file
})

// Always exportt the class so you can import it elsewhere. Ex. in AppModule
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;

  constructor() {}

  // Wordt gecalled nadat component aangemaakt is. Goed voor initialization logic.
  ngOnInit() {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
