import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRoute, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { PlayerComponent } from './player/player.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '',   redirectTo: '/teams', pathMatch: 'full' },
  { path: 'teams', component: TeamListComponent },
  { path: 'team/:id', component: TeamComponent },
  { path: 'player/:id', component: PlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
