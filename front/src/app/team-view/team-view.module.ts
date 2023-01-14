import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component'
import { TeamViewComponent } from './team-view.component'



@NgModule({
  declarations: [
    PlayerComponent,
    TeamViewComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlayerComponent,
    TeamViewComponent,
  ],
})
export class TeamViewModule { }
