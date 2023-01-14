import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Player } from '../../interfaces/player.interface'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
  @Input() player: Player | any = {}

  constructor () { }
}
