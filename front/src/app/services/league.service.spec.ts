import { TestBed } from '@angular/core/testing'

import { LeagueService } from './league.service'
import { HttpClientModule } from '@angular/common/http'

describe('LeagueService', () => {
  let service: LeagueService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    })
    service = TestBed.inject(LeagueService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
