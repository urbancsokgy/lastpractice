import { heroHead } from './../../hero';
import { HerotwoService } from './../../services/herotwo.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { BehaviorSubject } from 'rxjs';
import { KeyValue } from '@angular/common';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-herodtwo',
  templateUrl: './herodtwo.component.html',
  styleUrls: ['./herodtwo.component.scss']
})
export class HerodtwoComponent implements OnInit {

  heroList$: BehaviorSubject<Hero[]> = this.herotwoService.list$;
  currentHeroArray: Hero[]=[];
  arrayLength: number=0;
  heroAttribute=new heroHead();
  constructor(private herotwoService: HerotwoService) { }

  ngOnInit(): void {
      this.herotwoService.getAll();
      this.leker();
  }
    leker(){
     this.heroList$.subscribe(data=>
      {this.currentHeroArray=data;
        this.myLength(this.currentHeroArray)
      }, );
    }
    myLength(arr: Hero[]){
      this.currentHeroArray=this.herotwoService.toArray()
    // console.log("Új heroservice",this.currentHeroArray);
      this.arrayLength=arr.length;

  }
  orig(){
    return 0
  }

}
