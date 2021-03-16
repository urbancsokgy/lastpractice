import { HerotwoService } from './services/herotwo.service';
import { HeroService } from './service/hero.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { from } from 'rxjs';
import { DelayDirective } from './directive/delay.directive';
import { HighlightDirective } from './directive/highlight.directive';
import { SearchPipe } from './pipes/search.pipe';
import {FormsModule} from '@angular/forms';
import { EditorComponent } from './component/editor/editor.component';
import { NavComponent } from './component/nav/nav.component';
import { HomeComponent } from './component/home/home.component';
import { HerodtwoComponent } from './component/herodtwo/herodtwo.component';
import { EventComponent } from './event/event.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProbaComponent } from './component/proba/proba.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DelayDirective,
    HighlightDirective,
    SearchPipe,
    EditorComponent,
    NavComponent,
    HomeComponent,
    HerodtwoComponent,
    EventComponent,
    ReactiveformComponent,
    ProbaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeroService,
  HerotwoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
