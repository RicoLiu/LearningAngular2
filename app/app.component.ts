import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component'

export class Title {
    id:number;
    name:string;
}
const HEROES:Hero[] = [
    {id: 11, name: 'Mr.Alice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bob'},
    {id: 14, name: 'Mike'},
    {id: 15, name: 'Danny'},
    {id: 16, name: 'Jenny'},
    {id: 17, name: 'Jeff'},
    {id: 18, name: 'Allen'}
]

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title.name}}</h1>
    <ul class="heroes">
        <li *ngFor="let hero of heroes"
            [class.selected]="hero === selectedHero"
            (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
    </ul>
     <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
    styles: [`
        .selected {
          background-color: #CFD8DC !important;
          color: white
        }
        .heroes {
          margin: 0 0 2em 0;
          list-style-type: none;
          padding: 0;
          width: 15em
        }
        .heroes li {
          cursor: pointer;
          position: relative;
          left: 0;
          background-color: #EEE;
          margin: .5em;
          padding: .3em 0;
          height: 1.6em;
          border-radius: 4px;
        }
        .heroes li.selected:hover {
          background-color: #BBD8DC !important;
          color: white;
        }
        .heroes li:hover {
          color: #607D8B;
          background-color: #DDD;
          left: .1em;
        }
        .heroes .badge {
          display: inline-block;
          font-size: small;
          color: white;
          padding: 0.8em 0.7em 0 0.7em;
          background-color: #607D8B;
          line-height: 1em;
          position: relative;
          left: -1px;
          top: -4px;
          height: 1.8em;
          margin-right: .8em;
          border-radius: 4px 0 0 4px;
        }
    `],
    directives: [HeroDetailComponent]
})
export class AppComponent {
    heroes = HEROES
    title:Title = {
        id: 1,
        name: 'Tour of Heroes'
    }
    selectedHero:Hero;

    onSelect(hero:Hero) {
        this.selectedHero = hero
    }
}
