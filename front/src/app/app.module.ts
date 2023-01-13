import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component'

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamComponent,
    TeamListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
