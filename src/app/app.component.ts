import { HeroService } from './service/hero.service';
import { Hero } from './hero';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Last practice';
  heroList$: BehaviorSubject<Hero[]> = this.heroService.list$;
  heroArray: Hero[]=[];
 constructor(private heroService: HeroService){

 }


 ngOnInit(): void {
   this.heroService.getAll(`?_sort=address&_order=?_start=0&_end=5`);
   this.heroList$.subscribe(
     hero=>this.heroArray=hero,
   )

}

}
