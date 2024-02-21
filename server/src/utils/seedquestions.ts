// seeder.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Question } from '../personalitytest/entities/question.entity';
import { Answer } from '../personalitytest/entities/answer.entity';

import seedquestions from './defaultquestions.json';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
    @InjectRepository(Answer)
    private readonly answerRepository: Repository<Answer>,
  ) {}

  async seedDatabase() {
    for (const q of seedquestions) {
      const newQuestion = this.questionRepository.create({ question: q.question });
      await this.questionRepository.save(newQuestion);

      const newOptions = q.options.map(option => {
        return this.answerRepository.create({
          question: newQuestion,
          optionLabel: option.label,
          points: option.points,
        });
      });
      await this.answerRepository.save(newOptions);
    }

    Logger.log('Personality Questions Database seeded');
  }
}
