import { Component } from '@angular/core'
import { LeagueService } from '../services/league.service'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-teams-list-view',
  templateUrl: './team-list-view.component.html',
  styleUrls: ['./team-list-view.component.css'],
})
export class TeamListViewComponent {
  protected leagues: any[] = []

  protected teams: any[] = []

  protected name = new FormControl('')

  constructor (
    private leagueService: LeagueService,
  ) { }

  ngOnInit () {
    this.showLeague()

    this.name.valueChanges.subscribe((data) => {
      if (data === null) {
        data = ''
      }

      this.showLeague(data)
    })
  }

  showLeague (slug: string = '') {
    this.leagueService.getTeamsByLeague(slug)
      .subscribe((data: any) => {
        this.leagues = data

        this.teams = this.leagues
          .map((league) => league.teams)
          .flat()
      })
  }
}
