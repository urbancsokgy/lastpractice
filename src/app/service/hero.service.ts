import { Hero } from './../hero';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

    url: string="http://localhost:3000/heroes";
    list$: BehaviorSubject<Hero[]>=new BehaviorSubject<Hero[]>([]);

  constructor( private http: HttpClient) { }

getAll(param:string):any{
  // this.url=this.url+param;
  // this.list$.next([]);
  this.http.get<Hero[]>(this.url+param).subscribe(
    data=>this.list$.next(data)
    );

  }
  get(id: number): Observable<Hero>{
    return this.http.get<Hero>(this.url+`/${id}`)
  }
  create(hero: Hero):Observable<any>{
    return this.http.post<Observable<any>>(this.url,hero)
  }
  update(hero: Hero):Observable<any>{
    return this.http.patch<Hero>(`${this.url}/${hero.id}`,hero)
  }
  delete(id: number): Observable<any>{
    return this.http.delete<Hero>(`${this.url}/${id}`);
    this.getAll('');
  }

}
