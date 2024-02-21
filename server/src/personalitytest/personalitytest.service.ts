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
    await this.questionRepository.save(newQuestion);
  
    // Create options for the question
    const newOptions = options.map((option) => {
      return this.answerRepository.create({
        question: newQuestion,
        optionLabel: option.label,
        points: option.points,
      });
    });
  
    // Save options and wait for all save operations to complete
    const savedOptions = await Promise.all(newOptions.map(async (option) => {
      return await this.answerRepository.save(option);
    }));
  
    // Return the assembled question object with saved options
    return { ...newQuestion, options: savedOptions.map(option => {
      return { id: option.id, label: option.optionLabel, points: option.points }; 
    }) };
  }

  getAllQuestions() {

    //get all questions

    const questions = this.questionRepository.find();



    return questions;
  }
}
