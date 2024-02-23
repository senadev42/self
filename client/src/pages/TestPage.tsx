import { useEffect, useState } from "react";
import DynamicTestComponent from "../components/DynamicTestComponent";
import StartTestComponent from "../components/StartTestComponent";

import { useQuery } from "react-query";
import ResultsComponent from "../components/ResultsComponent";

const fetchQuestions = async () => {
  const response = await fetch("http://localhost:3000/api/v1/questions");
  if (!response.ok) {
    throw new Error("Failed to fetch questions");
  }
  return response.json();
};

export enum PAGESTATES {
  start,
  intest,
  results
}

export interface Score {
  total: number;
  value: number;
}

const StartTestPage = () => {
  const {
    data: questions,
    isLoading,
    isError,
  } = useQuery("questions", fetchQuestions);

  const [pageState, setPageState] = useState(PAGESTATES.start);
  const [score, setScore] = useState<Score>({
    total: 0,
    value: 0
  });

  useEffect(() => {
    if (questions) {
      setScore({
        total: questions.length * 4,
        value: 0
      });
    }
  }, [questions])

  const updateScore = (scoreValue: number) => {
    setScore({...score, value: scoreValue});
  }

  const dynamiccomponent = isLoading ? (
    <p>Loading...</p>
  ) : isError ? (
    <p>Error fetching questions</p>
  ) : (
    <DynamicTestComponent questions={questions} setPageState={setPageState} setScore={updateScore}/>
  );

  return (
    <div className="flex flex-col md:flex-row h-screen bg-cream">
      <div className="md:w-1/3 bg-pink h-20 md:h-auto w-full"></div>
      <div className="md:w-2/3 p-8 flex flex-col md:justify-center mx-auto w-full ">
        {pageState === PAGESTATES.start ? (
          <StartTestComponent setPageState={setPageState} />
        ) : pageState === PAGESTATES.intest ? (
          dynamiccomponent
        ) : (
           <ResultsComponent score={score} />
           
        )}
      </div>
    </div>
  );
};

export default StartTestPage;
