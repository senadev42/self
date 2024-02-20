import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//DB setup
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './personalitytest/entities/question.entity';
import { Answer } from './personalitytest/entities/answer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/personality_test.db',
      entities: [Question, Answer],
      synchronize: true,
      logging: true
    }),
    TypeOrmModule.forFeature([Question, Answer]),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
