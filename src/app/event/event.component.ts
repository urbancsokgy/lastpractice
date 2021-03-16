import { Hero } from 'src/app/hero';
import { HerotwoService } from './../services/herotwo.service';
import { HeroService } from './../service/hero.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Button } from 'selenium-webdriver';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  value: string='';
  powerArray: Observable<string[]>=this.herotwoService.getPower();
  newHero: Hero=new Hero();

  constructor(private herotwoService: HerotwoService,
              private heroService: HeroService
              ) { }

  ngOnInit(): void {
    console.log( this.heroService.get(1).subscribe());
    this.herotwoService.getPower()
    // .subscribe(
    //   data=>this.powerArray=data,
    // );
  }
  event(event :Event){
    this.value+=(event.target as HTMLDivElement)
    .parentElement?.lastElementChild?.setAttribute("style", "display: block;") + ' ';
    this.value+=(event.target as HTMLDivElement)
    .parentElement?.lastElementChild?.classList.toggle("active") + ' ';
    let el=(event.target as HTMLDivElement).parentElement;
    this.value='';
    console.log(el?.tagName);

  }
  onKey(val: string) { // without type info
    this.value = val ;
  }

  onSubmit(myForm: NgForm){
    console.log(myForm.value);
  }
}


