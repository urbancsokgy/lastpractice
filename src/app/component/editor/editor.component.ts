import { HeroService } from './../../service/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'


@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  currentHero: Hero =new Hero();
  heroIdFromRoute: number=0;


  constructor(private heroService: HeroService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
    ) {
      const RouterState=router.routerState;
      console.log(RouterState.snapshot.url);
    }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.heroIdFromRoute = Number(routeParams.get('id'));
   this.getcurrentHero(this.heroIdFromRoute)
  }
  getcurrentHero(id: number): void{
    if(id>0){
    this.heroService.get(this.heroIdFromRoute).subscribe(
      value=> this.currentHero=value,);
    }else{
      console.log('new Hero in progress' );
    }
  }

  backToHero():void{
    this.location.back()
  }
  onFormSubmit(form: NgForm): void{

    this.currentHero=form.value;
    this.currentHero.id=this.heroIdFromRoute;
    if(this.heroIdFromRoute>0){
      this.heroService.update(form.value).subscribe();
      this.location.back();
      }else{
        this.heroService.create(this.currentHero).subscribe();
        console.log("Create",this.currentHero);
          // this.router.navigateByUrl('hero-list');
          this.location.back()
    }

}}
