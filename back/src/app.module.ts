import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TeamController } from './team/team.controller'
import { TeamService } from './team/team.service'

@Module({
  imports: [],
  controllers: [AppController, TeamController],
  providers: [AppService, TeamService],
})
export class AppModule {}
