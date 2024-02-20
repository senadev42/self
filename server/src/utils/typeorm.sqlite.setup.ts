import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from '../personalitytest/entities/answer.entity';
import { Question } from '../personalitytest/entities/question.entity';


export const TypeORMSQLiteRootModule = () => [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [Question, Answer],
    synchronize: true,
  })
];

export const PersonalityTestSQLModule = () => [
  ...TypeORMSQLiteRootModule(),
  TypeOrmModule.forFeature([Question, Answer]),
];
