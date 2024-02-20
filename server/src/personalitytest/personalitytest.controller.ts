import { Controller, Post, Body, Get } from '@nestjs/common';
import { PersonalitytestService } from './personalitytest.service';

import { Question } from './entities/question.entity';
import { Answer } from './entities/answer.entity';
import { CreateQuestionDto } from './dtos/create-question.dto';

@Controller()
export class PersonalitytestController {
  constructor(
    private readonly personalityTestService: PersonalitytestService,
  ) {}

  // Create a new question
  @Post('questions')
  async createQuestion(@Body() createQuestion: CreateQuestionDto) {
    return this.personalityTestService.createQuestion(createQuestion);
  }

  // Get all questions
  @Get('questions')
  async getAllQuestions() {
    return this.personalityTestService.getAllQuestions();
  }
}
