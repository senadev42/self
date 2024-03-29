import { useState } from "react";
import { TestNavButton } from "./TestNavButton";
import { OptionButton } from "./OptionButton";
import { PAGESTATES, Score } from "../pages/TestPage";

//types
interface Props {
  questions: Question[];
  setPageState: (arg0: number) => void;
  setScore: Function;
}

export interface Option {
  id: number;
  label: string;
  points: number;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}


const DynamicTestComponent = ({ questions, setPageState, setScore }: Props) => {
  //state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  //save answers
  const [userAnswers, setUserAnswers] = useState<(Option | null)[]>(
    Array(questions.length).fill(null)
  );

  //handlers
  const handleOptionSelect = (option: Option) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = option;

    setUserAnswers(updatedUserAnswers);
  };

  //next and prev handlers
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {

      //if finished
      console.log("finished");

      //calculate score and pass it on upwards
      const totalPoints = userAnswers.reduce((acc, val) => {
        return acc + (val?.points ?? 0);
      }, 0);

      setScore(totalPoints);

      setPageState(PAGESTATES.results)
    }
    console.log(userAnswers);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex === 0) setPageState(0);
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  // highlight handlers, kind of arbitrary though will have to control input
  const questionWords = currentQuestion.question.split(" ");
  const lastFourWords = questionWords.slice(-4).join(" ");

  //for progress bar
  const progressPercentage = ((currentQuestionIndex) / questions.length) * 100;

  return (
    <div className="">
      {/* The Question */}
      <h2 className="text-xl font-bold font-mono mb-5">
        {currentQuestionIndex + 1}. {questionWords.slice(0, -4).join(" ")}{" "}
        <span className="bg-pink">{lastFourWords}</span>
      </h2>

      {/* The Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-2">
        {currentQuestion.options.map((option) => {
          const isSelected =
            userAnswers[currentQuestionIndex]?.label === option.label;
          return (
            <OptionButton
              isSelected={isSelected}
              key={option.id}
              handleOptionSelect={handleOptionSelect}
              option={option}
            />
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex flex-row justify-between gap-x-6">
        <TestNavButton
          buttonlabel={currentQuestionIndex === 0 ? "Return" : "Previous"}
          onClick={handlePreviousQuestion}
        />
        {/* question # out of total questions */}
        <div className="mt-10 w-full mx-4 lg:mx-20">
      <div className="relative w-full h-2 bg-pink rounded-full mt-2">
        <div
          className="absolute top-0 left-0 bg-blueish-200 h-2 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
        <TestNavButton
          buttonlabel={
            currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"
          }
          onClick={handleNextQuestion}
          disabled={userAnswers[currentQuestionIndex] == null}
        />
      </div>
    </div>
  );
};

export default DynamicTestComponent;
