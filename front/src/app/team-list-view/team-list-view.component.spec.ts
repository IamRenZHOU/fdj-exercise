import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TeamListViewComponent } from './team-list-view.component'
import { HttpClientModule } from '@angular/common/http'
import { MatInputModule } from '@angular/material/input'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

describe('TeamListViewComponent', () => {
  let component: TeamListViewComponent
  let fixture: ComponentFixture<TeamListViewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamListViewComponent],
      imports: [HttpClientModule, MatAutocompleteModule, MatInputModule, BrowserModule, ReactiveFormsModule],
    })
      .compileComponents()

    fixture = TestBed.createComponent(TeamListViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
