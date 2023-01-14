import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TeamViewComponent } from './team-view.component'
import { ActivatedRoute } from '@angular/router'
import { of } from 'rxjs'
import { PlayerComponent } from './player/player.component'

describe('TeamComponent', () => {
  let component: TeamViewComponent
  let fixture: ComponentFixture<TeamViewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TeamViewComponent,
        PlayerComponent,
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
