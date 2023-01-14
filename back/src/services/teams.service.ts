import { Injectable } from '@nestjs/common'
import { Team, TeamDocument } from '../schemas/team.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class TeamsService {
  constructor (
    @InjectModel(Team.name)
    public teamModel: Model<TeamDocument>
  ) {}

  async findOne (id: string): Promise<Team> {
    return this.teamModel.findById(id)
      .populate('players')
      .exec()
  }
}
