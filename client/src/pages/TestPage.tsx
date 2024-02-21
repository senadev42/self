import { useState } from "react";
import DynamicTestComponent from "../components/DynamicTestComponent";
import StartTestComponent from "../components/StartTestComponent";

import { useQuery } from 'react-query';

const fetchQuestions = async () => {
  const response = await fetch('http://localhost:3000/api/v1/questions');
  if (!response.ok) {
    throw new Error('Failed to fetch questions');
  }
  return response.json();
};

const StartTestPage = () => {
  const { data: questions, isLoading, isError } = useQuery('questions', fetchQuestions);

  const [pageState, setPageState] = useState(0);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-cream">
      <div className="md:w-1/3 bg-pink h-20 md:h-auto w-full"></div>
      <div className="md:w-2/3 p-8 flex flex-col md:justify-center mx-auto w-full ">
        {pageState === 0 ? (
          <StartTestComponent setPageState={setPageState} />
        ) : (
          isLoading ? (
            <p>Loading...</p>
          ) : isError ? (
            <p>Error fetching questions</p>
          ) : (
            <DynamicTestComponent questions={questions} setPageState={setPageState} />
          )
        )}
      </div>
    </div>
  );
};

export default StartTestPage;
