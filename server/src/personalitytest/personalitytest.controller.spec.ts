import { Test, TestingModule } from '@nestjs/testing';
import { PersonalitytestController } from './personalitytest.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './entities/answer.entity';
import { Question } from './entities/question.entity';
import { PersonalitytestService } from './personalitytest.service';

describe('PersonalitytestController', () => {
  let controller: PersonalitytestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: 'db/personality_test.db',
          entities: [Question, Answer],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([Question, Answer]),
      ],
      controllers: [PersonalitytestController],
      providers: [PersonalitytestService]
    }).compile();

    controller = module.get<PersonalitytestController>(PersonalitytestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
