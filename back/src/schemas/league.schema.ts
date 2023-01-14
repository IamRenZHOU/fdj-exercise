import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose';

import { Team } from './team.schema'

export type LeagueDocument = mongoose.HydratedDocument<League>;

@Schema()
export class League {
  @Prop()
  name: string;

  @Prop()
  sport: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }] })
  teams: Team[];
}

export const LeagueSchema = SchemaFactory.createForClass(League);