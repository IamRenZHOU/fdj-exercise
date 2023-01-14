import { Component, OnInit } from '@angular/core'
import { LeagueService } from '../services/league.service'
import { FormControl } from '@angular/forms'
import { League } from '../interfaces/league.interface'
import { Team } from '../interfaces/team.interface'
import { debounceTime, map, mergeMap, Observable, of } from 'rxjs'

@Component({
  selector: 'app-teams-list-view',
  templateUrl: './team-list-view.component.html',
  styleUrls: ['./team-list-view.component.css'],
})
export class TeamListViewComponent implements OnInit {
  protected leagues: League[] = []
  protected teams: Team[] = []

  protected leaguesName: string[] = ['hello', 'Hello1', 'world']
  protected searchTerm = new FormControl('')
  protected filteredOptions: Observable<string[]> = of([])

  constructor (
    private leagueService: LeagueService,
  ) { }

  async ngOnInit () {
    await this.showLeague()

    this.filteredOptions = this.searchTerm.valueChanges
      .pipe(
        debounceTime(200),
        mergeMap(async (term: string | any) => {
          console.log('show league', this.leaguesName)

          await this.showLeague(term)

          return term
        }),
        map((term: string | any) => {
          if (!term) {
            term = ''
          }

          console.log('show league name', this.leaguesName, term)

          return this.leaguesName.filter((name) => name.toLowerCase().includes(term.toLowerCase()))
        }),
      )
  }

  async showLeague (slug: string = '') {
    return new Promise((resolve) => this.leagueService.getTeamsByLeague(slug)
      .subscribe((data: League[] | any) => {
        this.leagues = data

        this.leaguesName = this.leagues.map((league: League) => league.name).flat()

        this.teams = this.leagues
          .map((league: League) => league.teams)
          .flat()

        resolve(data)
      }),
    )
  }
}
