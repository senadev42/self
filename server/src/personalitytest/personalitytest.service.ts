import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

//entities
import { Question } from './entities/question.entity';
import { Answer } from './entities/answer.entity';

import { CreateQuestionDto } from './dtos/create-question.dto';

@Injectable()
export class PersonalitytestService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
    @InjectRepository(Answer)
    private readonly answerRepository: Repository<Answer>,
  ) {}

  async createQuestion(questionData: CreateQuestionDto) {
    const { question, options } = questionData;

    // Create the question
    const newQuestion = this.questionRepository.create({ question });

    console.log(newQuestion);

    return await this.questionRepository.save(newQuestion);
  }

  getAllQuestions() {

    //get all questions

    const questions = this.questionRepository.find();



    return questions;
  }
}
