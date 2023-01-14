import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PlayerComponent } from './player.component'
import { ActivatedRoute } from '@angular/router'
import { of } from 'rxjs'

describe('PlayerComponent', () => {
  let component: PlayerComponent
  let fixture: ComponentFixture<PlayerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerComponent],
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

    fixture = TestBed.createComponent(PlayerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
