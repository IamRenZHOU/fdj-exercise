import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TeamsController } from './team/teams.controller'
import { TeamsService } from './team/teams.service'

@Module({
  imports: [],
  controllers: [AppController, TeamsController],
  providers: [AppService, TeamsService],
})
export class AppModule {}
