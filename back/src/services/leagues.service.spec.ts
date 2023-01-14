import { Test, TestingModule } from '@nestjs/testing'
import { LeaguesService } from './leagues.service'
import { getModelToken } from '@nestjs/mongoose'
import { League } from '../schemas/league.schema'

describe('LeaguesService', () => {
  let service: LeaguesService;
  const mockTeamModel = {
    find: jest.fn(),
    findById: jest.fn(),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LeaguesService,
        {
          provide: getModelToken(League.name),
          useValue: mockTeamModel,
        },],
    }).compile();

    service = module.get<LeaguesService>(LeaguesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
