import { Module } from '@nestjs/common';
import { PersonalitytestController } from './personalitytest.controller';
import { PersonalitytestService } from './personalitytest.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { Answer } from './entities/answer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Question, Answer])
  ],
  controllers: [PersonalitytestController],
  providers: [PersonalitytestService]
})
export class PersonalitytestModule {}
