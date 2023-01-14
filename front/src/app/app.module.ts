import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PlayerComponent } from './team-view/player/player.component'
import { TeamListViewComponent } from './team-list-view/team-list-view.component'
import { TeamViewComponent } from './team-view/team-view.component'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { TeamComponent } from './team-list-view/team/team.component'
import { TeamViewModule } from './team-view/team-view.module'

@NgModule({
  declarations: [
    AppComponent,
    TeamListViewComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TeamViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
