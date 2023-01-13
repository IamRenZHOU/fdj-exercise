import { Test, TestingModule } from '@nestjs/testing'
import { TeamsService } from './teams.service'

describe('TeamsService', () => {
  let teamsService: TeamsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamsService],
    }).compile()

    teamsService = module.get<TeamsService>(TeamsService)
  })

  it('should be defined', () => {
    expect(teamsService).toBeDefined()
  })
})
