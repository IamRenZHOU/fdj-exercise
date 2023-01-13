import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TeamComponent } from './team.component'
import { ActivatedRoute } from '@angular/router'
import { of } from 'rxjs'

describe('TeamComponent', () => {
  let component: TeamComponent
  let fixture: ComponentFixture<TeamComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamComponent],
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

    fixture = TestBed.createComponent(TeamComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
