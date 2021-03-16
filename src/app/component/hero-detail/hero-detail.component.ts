import { HerotwoService } from './../../services/herotwo.service';
import { HeroService } from './../../service/hero.service';
import { Hero, heroHead } from './../../hero';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  localHeroArray: Hero[]=[];
  heroAttributes=Object.values( new heroHead());
  heroAttributesName=Object.keys( new heroHead());
  heroList$: BehaviorSubject<Hero[]> = this.heroService.list$;
  heroArray: Hero[]=[];
  phrase: string='';
  sortDirection: string='';
  lastParam: string='';

  constructor(private heroService: HeroService,
     private herotwoService: HerotwoService) { }

  ngOnInit(): void {
    this.sort('id', 0, 10)


  }

  sort(param: string, start: number=0, end: number=10){
     (param===this.lastParam && this.sortDirection=="asc" ) ?
      this.sortDirection="desc" : this.sortDirection="asc";
    const list=`?_sort=${param.toLowerCase()}&_order=${this.sortDirection},?_start=0&_end=10`;
    this.heroService.getAll(list);
    this.lastParam=param;
    this.heroList$.subscribe(
      hero=>this.localHeroArray=hero,
      )
      console.log(list);
  }
  setheroDelete(hero:Hero){
   this.heroService.delete(hero.id).subscribe();
   this.sort('id', 1, 10)
  }

  speak(text: string){
    let msg = new SpeechSynthesisUtterance(); msg.text =text;
    msg.rate = 0.5;
    window.speechSynthesis.speak(msg);
  }
  filter(val:string){
    this.phrase=val
  }
  onFocusEvent(){
    this.phrase=''
  }
}
