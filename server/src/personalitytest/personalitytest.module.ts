import { Module, OnModuleInit } from '@nestjs/common';
import { PersonalitytestController } from './personalitytest.controller';
import { PersonalitytestService } from './personalitytest.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { Answer } from './entities/answer.entity';
import { SeederService } from 'src/utils/seedquestions';

@Module({
  imports: [
    TypeOrmModule.forFeature([Question, Answer])
  ],
  controllers: [PersonalitytestController],
  providers: [PersonalitytestService, SeederService]
})

export class PersonalitytestModule implements OnModuleInit {
  constructor(private readonly seederService: SeederService) {}

  async onModuleInit() {
    await this.seederService.seedDatabase();
  }
}

