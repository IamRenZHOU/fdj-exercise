import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TeamComponent } from './team/team.component'
import { TeamListViewComponent } from './team-list-view.component'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    TeamComponent,
    TeamListViewComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    TeamComponent,
    TeamListViewComponent,
  ],
})
export class TeamListViewModule {}

