import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from '../src/app.module'
import { TeamsService } from '../src/services/teams.service'
import { LeaguesService } from '../src/services/leagues.service'

describe('LeaguesController (e2e)', () => {
  let app: INestApplication

  let leaguesService = {
    find: () => [{ id: 1 }, { id: 2 }],
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).overrideProvider(LeaguesService)
      .useValue(leaguesService)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('/leagues?slug (GET)', () => {
    return request(app.getHttpServer())
      .get('/leagues/slug slug')
      .expect(200)
      .expect(leaguesService.find())
  })
})
