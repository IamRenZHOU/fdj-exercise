import { Controller, Get, Param } from '@nestjs/common'
import { TeamsService } from '../services/teams.service'
import { Team } from '../schemas/team.schema'
import { LeaguesService } from '../services/leagues.service'
import { League } from '../schemas/league.schema'

@Controller('leagues')
export class LeaguesController {
  private leaguesService: LeaguesService

  constructor (leaguesService: LeaguesService) {
    this.leaguesService = leaguesService
  }

  @Get()
  async findAll (): Promise<League[]> {
    return this.leaguesService.find()
  }

  @Get(':slug')
  async find (@Param('slug') slug: string = ''): Promise<League[]> {
    return this.leaguesService.find(slug)
  }
}
