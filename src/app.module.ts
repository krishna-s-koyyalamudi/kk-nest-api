import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestModule } from './quest/quest.module';
import { UserModule } from './user/user.module';
import { LocationModule } from './location/location.module';
import { User } from './user/entities/user.entity';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [QuestModule, LocationModule, UserModule,TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'hunt.db',
    synchronize: true,
    entities: [User],
  }), LocationModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
