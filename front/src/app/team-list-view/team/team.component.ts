import { Component, Input } from '@angular/core'
import { Team } from '../../interfaces/team.interface'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  @Input() team: Team = { _id: 'id', name: 'name', thumbnail: 'thumbnail', players: [] }
}
