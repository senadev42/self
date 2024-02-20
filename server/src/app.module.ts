import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//DB setup
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './personalitytest/entities/question.entity';
import { Answer } from './personalitytest/entities/answer.entity';

//Modules
import { PersonalitytestModule } from './personalitytest/personalitytest.module';
import { TypeORMSQLiteRootModule } from './utils/typeorm.sqlite.setup';

@Module({
  imports: [
    ...TypeORMSQLiteRootModule(),
    PersonalitytestModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
