import { Test, TestingModule } from '@nestjs/testing';
import { PersonalitytestService } from './personalitytest.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './entities/answer.entity';
import { Question } from './entities/question.entity';
import { PersonalityTestSQLModule } from '../utils/typeorm.sqlite.setup';

describe('PersonalitytestService', () => {
  let service: PersonalitytestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...PersonalityTestSQLModule()],
      providers: [PersonalitytestService],
    }).compile();

    service = module.get<PersonalitytestService>(PersonalitytestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
