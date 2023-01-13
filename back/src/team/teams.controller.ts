import { Controller, Get, Param } from '@nestjs/common'
import { Team } from './team.interface'
import { TeamsService } from './teams.service'

@Controller('teams')
export class TeamsController {
  private teamsService: TeamsService

  constructor (teamsService: TeamsService) {
    this.teamsService = teamsService
  }

  @Get(':id')
  async findOne (@Param() params): Promise<Team> {
    console.log(params.id)
    return this.teamsService.findOne(params.id)
  }
}
