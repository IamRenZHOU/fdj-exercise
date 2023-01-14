import { Test, TestingModule } from '@nestjs/testing'
import { TeamsService } from './teams.service'
import { Team } from '../schemas/team.schema'
import { getModelToken } from '@nestjs/mongoose'

describe('TeamsService', () => {
  let teamsService: TeamsService
  const mockTeamModel = {
    find: jest.fn(),
    findById: jest.fn(),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeamsService,
        {
          provide: getModelToken(Team.name),
          useValue: mockTeamModel,
        },
      ],
    }).compile()

    teamsService = module.get<TeamsService>(TeamsService)

    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(teamsService).toBeDefined()
  })

  describe('findOne', () => {
    it('should find all', async () => {
      const expected: Team = { name: 'name', thumbnail: 'thumbnail', players: [] }

      mockTeamModel.findById.mockImplementation(() => ({
        populate: () => ({
          exec: jest.fn().mockResolvedValue(expected),
        }),
      }))

      const res = await teamsService.findOne('1')

      expect(res).toBe(expected)
    })
  })
})
