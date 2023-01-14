import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from '../src/app.module'
import { TeamsService } from '../src/services/teams.service'

describe('LeaguesController (e2e)', () => {
  let app: INestApplication

  let teamsService = {
    findBySlug: () => [{ id: 1 }, { id: 2 }],
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).overrideProvider(TeamsService)
      .useValue(teamsService)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('/leagues?slug (GET)', () => {
    return request(app.getHttpServer())
      .get('/leagues?slug=slug slug')
      .expect(200)
      .expect(teamsService.findBySlug())
  })
})
