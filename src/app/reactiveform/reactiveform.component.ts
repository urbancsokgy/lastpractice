import { HeroService } from './../service/hero.service';
import { superpower } from './../hero';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  powers: string[]=superpower.list;
  reactFormGroup=new FormGroup({
    name:new FormControl('',[Validators.required, Validators.minLength(5),Validators.pattern('^[A-Z][a-z]+') ]),
    address: new FormControl('',Validators.required ),
    superpower: new FormControl('',Validators.required ),
  })

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private router: Router, ) { }

  ngOnInit(): void {
  }
  onsubmit(): void{
    console.log(this.reactFormGroup.value);
    this.heroService.create(this.reactFormGroup.value).subscribe();
    this.router.navigateByUrl('heroes');
  }
}
