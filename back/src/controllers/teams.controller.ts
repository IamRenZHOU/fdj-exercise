import { Controller, Get, Param } from '@nestjs/common'
import { TeamsService } from '../services/teams.service'
import { Team } from '../schemas/team.schema'

@Controller('teams')
export class TeamsController {
  private teamsService: TeamsService

  constructor (teamsService: TeamsService) {
    this.teamsService = teamsService
  }

  @Get(':id')
  async findOne (@Param('id') id: string): Promise<Team> {
    return this.teamsService.findOne(id)
  }
}
