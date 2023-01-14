import { Component } from '@angular/core'
import { LeagueService } from '../league.service'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-teams-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent {
  protected leagues: any[] = []

  protected teams: any[] = []

  protected name = new FormControl('');

  constructor (private leagueService: LeagueService) {
    this.name.valueChanges.subscribe((data) => {
      if (data) {
        this.showLeague(data)
      }
    })
  }

  ngOnInit () {
  }

  showLeague (slug: string) {
    this.leagueService.getTeamsByLeague(slug)
      .subscribe((data: any) => {
        this.leagues = data

        this.teams = this.leagues.map((league) => league.teams).flat()
      })
  }
}
