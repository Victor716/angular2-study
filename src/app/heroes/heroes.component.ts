import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
/**
 * 1. 从 Angular 核心库中导入 Component 符号，并为组件类加上 @Component 装饰器。
 * 2. @Component 是个装饰器函数，用于为该组件指定 Angular 所需的元数据。
 */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
 
  constructor(private heroService: HeroService) { }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}