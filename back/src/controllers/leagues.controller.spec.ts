import { Test, TestingModule } from '@nestjs/testing'
import { LeaguesController } from './leagues.controller'
import { LeaguesService } from '../services/leagues.service'
import { League } from '../schemas/league.schema'
import { TeamsService } from '../services/teams.service'

jest.mock('../services/leagues.service')

describe('LeaguesController', () => {
  let leaguesController: LeaguesController
  let leaguesService: LeaguesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeaguesController],
      providers: [
        LeaguesService,
      ],
    }).compile()

    leaguesService = module.get<LeaguesService>(LeaguesService)
    leaguesController = module.get<LeaguesController>(LeaguesController)
  })

  it('should be defined', () => {
    expect(leaguesController).toBeDefined()
  })

  describe('find', () => {
    it('should call find with result', async () => {
      const result: League[] = [{ name: 'name', sport: 'sport', teams: [] }]

      jest.spyOn(leaguesService, 'find').mockResolvedValue(result)

      expect(await leaguesController.find('')).toBe(result)
    })
  })
})
