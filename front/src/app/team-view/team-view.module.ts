import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PlayerComponent } from './player/player.component'
import { TeamViewComponent } from './team-view.component'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [
    PlayerComponent,
    TeamViewComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
  ],
  exports: [
    PlayerComponent,
    TeamViewComponent,
  ],
})
export class TeamViewModule {}
