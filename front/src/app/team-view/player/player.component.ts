import { Component, Input } from '@angular/core'
import { Player } from '../../interfaces/player.interface'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
  @Input() player: Player = {
    _id: 'id',
    born: new Date(),
    name: 'name',
    thumbnail: 'thumbnail',
    position: 'position',
    signin: {
      currency: 'currency', amount: 123,
    },
  }

  constructor () { }
}
