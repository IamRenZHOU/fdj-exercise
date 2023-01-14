import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TeamListViewComponent } from './team-list-view/team-list-view.component'
import { TeamViewComponent } from './team-view/team-view.component'

const routes: Routes = [
  { path: '',   redirectTo: '/teams', pathMatch: 'full' },
  { path: 'teams', component: TeamListViewComponent },
  { path: 'teams/:id', component: TeamViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
