import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { TeamViewModule } from './team-view/team-view.module'
import { TeamListViewModule } from './team-list-view/team-list-view.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    TeamViewModule,
    TeamListViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
