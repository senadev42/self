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

  async getAllQuestions() {
    // Find all questions with their associated answers
    const questionsWithAnswers = await this.questionRepository
      .createQueryBuilder('question')
      .leftJoinAndSelect('question.answers', 'answer')
      .getMany();

    //five questions at random
    const randomQuestions = questionsWithAnswers.sort(() => 0.5 - Math.random()).slice(0, 5);
 
    // Return the assembled data in the intended body type
    return randomQuestions.map((question) => ({
      id: question.id,
      question: question.question,
      options: question.answers.map((answer) => ({
        id: answer.id,
        label: answer.optionLabel,
        points: answer.points,
      })),
    }));
  }
}
