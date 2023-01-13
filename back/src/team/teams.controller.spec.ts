import { TeamsController } from './teams.controller'
import { TeamsService } from './teams.service'
import { Team } from './team.interface'

describe('TeamsController', () => {
  let teamsService: TeamsService
  let controller: TeamsController

  beforeEach(async () => {
    teamsService = new TeamsService()
    controller = new TeamsController(teamsService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('findOne', () => {
    it('should call findOne with result', async () => {
      const result: Team = { id: 1, image: 'image', name: 'name' }
      jest.spyOn(teamsService, 'findOne').mockImplementation(() => result)

      expect(await controller.findOne(1)).toBe(result)
    })
  })
})
