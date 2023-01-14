import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Player } from './player.schema'

export type TeamDocument = mongoose.HydratedDocument<Team>;

@Schema()
export class Team {
  @Prop()
  name: string;

  @Prop()
  thumbnail: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }] })
  players: Player[];
}

export const TeamSchema = SchemaFactory.createForClass(Team);