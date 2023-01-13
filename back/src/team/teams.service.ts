import { Injectable } from '@nestjs/common'
import { Team } from './team.interface'

@Injectable()
export class TeamsService {
  private _teams: Team[] = [
    {
      id: 1,
      name: 'Team 1',
      image: 'Image 1',
    },
    {
      id: 2,
      name: 'Team 2',
      image: 'Image 2',
    },
  ]

  findOne (id): Team {
    return this._teams[id]
  }
}
