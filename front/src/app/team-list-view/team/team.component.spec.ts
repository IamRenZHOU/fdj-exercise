import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TeamComponent } from './team.component'
import { ActivatedRoute, RouterModule } from '@angular/router'

describe('TeamsssComponent', () => {
  let component: TeamComponent
  let fixture: ComponentFixture<TeamComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
      imports: [
        RouterModule,
      ],
    })
      .compileComponents()

    fixture = TestBed.createComponent(TeamComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
