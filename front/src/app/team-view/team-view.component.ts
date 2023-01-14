import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TeamService } from '../services/team.service'
import { Team } from '../interfaces/team.interface'

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css'],
})
export class TeamViewComponent {
  protected id: string = ''

  protected team: Team = { _id: 'id', players: [], name: 'name', thumbnail: 'thumbnail' }

  constructor (
    private route: ActivatedRoute,
    private teamService: TeamService,
  ) { }

  ngOnInit () {
    this.id = this.route.snapshot.paramMap.get('id')!
    this.showTeam(this.id)
  }

  showTeam (id: string) {
    this.teamService.getTeamsById(id)
      .subscribe((data: Team | any) => {
        this.team = data
      })
  }
}
