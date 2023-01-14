import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TeamsController } from './controllers/teams.controller'
import { TeamsService } from './services/teams.service'
import { LeaguesController } from './controllers/leagues.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { PlayerSchema } from './schemas/player.schema'
import { TeamSchema } from './schemas/team.schema'
import { LeagueSchema } from './schemas/league.schema'
import { LeaguesService } from './services/leagues.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost', {dbName: 'data'}),
    MongooseModule.forFeature([
      { name: 'Player', schema: PlayerSchema },
      { name: 'Team', schema: TeamSchema },
      { name: 'League', schema: LeagueSchema },
    ]),
  ],
  controllers: [AppController, TeamsController, LeaguesController],
  providers: [AppService, TeamsService, LeaguesService],
})
export class AppModule {}
