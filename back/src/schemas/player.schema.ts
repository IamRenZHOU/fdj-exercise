import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose';

export type PlayerDocument = HydratedDocument<Player>;

@Schema()
export class Player {
  @Prop()
  born: Date;

  @Prop()
  name: string;

  @Prop()
  position: string;

  @Prop()
  thumbnail: string;

  @Prop(raw({
    amount: { type: Number },
    currency: { type: String }
  }))
  signin: Record<number, string>;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);