import { Team } from './team.interface'

export class League {
  _id: string = ''
  name: string = ''
  sport: string = ''
  teams: Team[] = []
}
