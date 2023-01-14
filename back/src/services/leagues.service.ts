import { Injectable } from '@nestjs/common'
import { Team, TeamDocument } from '../schemas/team.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { League, LeagueDocument } from '../schemas/league.schema'

@Injectable()
export class LeaguesService {
  constructor (
    @InjectModel(League.name)
    public leagueModel: Model<LeagueDocument>,
  ) {}

  async find (slug: string = ''): Promise<League[]> {
    return this.leagueModel.find({ name: { $regex: new RegExp(`${slug.toLowerCase()}`, 'i') } })
      .populate('teams')
      .exec()
  }
}
