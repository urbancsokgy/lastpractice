import { Hero } from 'src/app/hero';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HerotwoService {

  url='http://localhost:3000/heroes'
  powerUrl='http://localhost:3000/SuperPower'
  list$: BehaviorSubject<Hero[]>=new BehaviorSubject<Hero[]>([]);
  heroArray:Hero[]=[];
  constructor( private http: HttpClient) { }

  getAll(): void {
    // this.list$.next([]);
     this.http.get<Hero[]>(this.url).subscribe(Hero =>
      this.list$.next(Hero)
    );
  }
  getPower():Observable<string[]>{
    return this.http.get<string[]>(this.powerUrl)
  }

  toArray(): Hero[] {
   this.list$.forEach(
      hero=>{this.heroArray=hero
      } );
  return this.heroArray;
  }


}
