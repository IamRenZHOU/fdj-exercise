import { Player } from './player.interface'

export class Team {
  _id: string = ''
  name: string = ''
  thumbnail: string = ''
  players: Player[] = []
}
