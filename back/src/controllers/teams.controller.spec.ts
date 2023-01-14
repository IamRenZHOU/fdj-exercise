import { TeamsController } from './teams.controller'
import { TeamsService } from '../services/teams.service'
import { Team } from '../schemas/team.schema'
import { Test } from '@nestjs/testing'

jest.mock('../services/teams.service')

describe('TeamsController', () => {
  let teamsController: TeamsController
  let teamsService: TeamsService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [TeamsController],
      providers: [
        TeamsService,
      ],
    }).compile()

    teamsService = module.get<TeamsService>(TeamsService)
    teamsController = module.get<TeamsController>(TeamsController)
  })

  it('should be defined', () => {
    expect(teamsController).toBeDefined()
  })

  describe('findOne', () => {
    it('should call findOne with result', async () => {
      const result: Team = { thumbnail: 'image', name: 'name', players: [] }

      jest.spyOn(teamsService, 'findOne').mockResolvedValue(result)

      expect(await teamsController.findOne('123')).toBe(result)
    })
  })
})
