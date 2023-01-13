import { TeamsController } from './teams.controller'
import { TeamsService } from './teams.service'
import { Team } from './team.interface'
import { Test } from '@nestjs/testing'

describe('TeamsController', () => {
  let teamsController: TeamsController
  let teamsService: TeamsService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TeamsController],
      providers: [TeamsService],
    }).compile();

    teamsService = moduleRef.get<TeamsService>(TeamsService);
    teamsController = moduleRef.get<TeamsController>(TeamsController);
  })

  it('should be defined', () => {
    expect(teamsController).toBeDefined()
  })

  describe('findOne', () => {
    it('should call findOne with result', async () => {
      const result: Team = { id: 1, image: 'image', name: 'name' }
      jest.spyOn(teamsService, 'findOne').mockImplementation(() => result)

      expect(await teamsController.findOne(1)).toBe(result)
    })
  })
})
