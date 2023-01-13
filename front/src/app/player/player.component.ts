import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Input() id : number = 0;

  constructor(
    private route: ActivatedRoute
  ) { }
}
