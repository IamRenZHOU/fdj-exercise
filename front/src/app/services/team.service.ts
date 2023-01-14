import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private base = '/teams'

  constructor (private http: HttpClient) { }

  getTeamsById (id: string = '') {
    return this.http.get(environment.apiUrl + this.base + '/' + id)
  }
}
