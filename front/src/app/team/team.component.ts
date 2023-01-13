import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-teams',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  protected id: string = ''

  constructor (
    private route: ActivatedRoute,
  ) { }

  ngOnInit () {
    this.id = this.route.snapshot.paramMap.get('id')!
  }
}
