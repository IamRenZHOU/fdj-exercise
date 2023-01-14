import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TeamViewComponent } from './team-view.component'
import { ActivatedRoute } from '@angular/router'
import { of } from 'rxjs'
import { PlayerComponent } from './player/player.component'
import { TeamService } from '../services/team.service'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

describe('TeamViewComponent', () => {
  let component: TeamViewComponent
  let fixture: ComponentFixture<TeamViewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TeamViewComponent,
        PlayerComponent,
      ],
      imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => of({ id: 123 }),
              },
            },
          },
        },
        {
          provide: TeamService,
          useValue: {
            getTeamsById: () => of({ id: 'id' }),
          },
        },
      ],
    })
      .compileComponents()

    fixture = TestBed.createComponent(TeamViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
