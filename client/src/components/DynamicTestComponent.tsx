import { useState } from "react";
import { TestNavButton } from "./Button";

//types
interface Props {
  questions: Question[];
}

export interface Option {
  label: string;
  points: number;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

const DynamicTestComponent = ({ questions }: Props) => {
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
    }
    console.log(userAnswers);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  // highlight handlers, kind of arbitrary though will have to control input
  const questionWords = currentQuestion.question.split(" ");
  const lastFourWords = questionWords.slice(-4).join(" ");

  return (
    <div className="">
      {/* The Question */}
      <h2 className="text-xl font-bold font-mono mb-5">
        {currentQuestionIndex + 1}. {questionWords.slice(0, -4).join(" ")}{" "}
        <span className="bg-pink">{lastFourWords}</span>
      </h2>

      {/* The Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4">
        {currentQuestion.options.map((option, index) => {
          const isSelected =
            userAnswers[currentQuestionIndex]?.label === option.label;

          return (
            <div
              className={`mb-2 ${
                isSelected ? "bg-pink" : "bg-blueish-100"
              } hover:bg-blueish-50 rounded-md`}
              key={index}
            >
              <button
                className=" text-white px-4 py-2 rounded hover:bg-blue-600 mr-2 w-full "
                onClick={() => handleOptionSelect(option)}
              >
                {option.label}
              </button>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex flex-row justify-between gap-x-6">
        <TestNavButton
          label={currentQuestionIndex === 0 ? "Return" : "Previous"}
          onClick={handlePreviousQuestion}
        />
        <TestNavButton
          label={
            currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"
          }
          onClick={handleNextQuestion}
        />
      </div>
    </div>
  );
};

export default DynamicTestComponent;
