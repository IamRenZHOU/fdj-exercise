import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListViewComponent } from './team-list-view.component';

describe('TeamListComponent', () => {
  let component: TeamListViewComponent;
  let fixture: ComponentFixture<TeamListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
