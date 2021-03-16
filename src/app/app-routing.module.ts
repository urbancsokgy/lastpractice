import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { EventComponent } from './event/event.component';
import { HerodtwoComponent } from './component/herodtwo/herodtwo.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { HomeComponent } from './component/home/home.component';
import { EditorComponent } from './component/editor/editor.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
   component: HomeComponent
  },
  {
    path: 'editor',
   component: EditorComponent
  },
   { path: 'herodtwo',
   component: HerodtwoComponent,
  },
  {
    path: 'editor/:id',
   component: EditorComponent
  },
  {
    path: 'heroes',
   component: HeroDetailComponent
  },
  {
    path: 'event',
   component: EventComponent
  },
  {
    path: 'reactiveform',
   component: ReactiveformComponent
  },
  {
    path: '**',
   component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
