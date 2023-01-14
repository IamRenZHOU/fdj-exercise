import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  private base = '/leagues'

  constructor (private http: HttpClient) { }

  getTeamsByLeague (slug: string = '') {
    return this.http.get(environment.apiUrl + this.base + '/' + slug)
  }
}
