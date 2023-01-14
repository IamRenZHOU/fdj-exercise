import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TeamComponent } from './team/team.component'
import { TeamListViewComponent } from './team-list-view.component'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule } from '@angular/material/grid-list'

@NgModule({
  declarations: [
    TeamComponent,
    TeamListViewComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    RouterModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
  ],
  exports: [
    TeamComponent,
    TeamListViewComponent,
  ],
})
export class TeamListViewModule {}

