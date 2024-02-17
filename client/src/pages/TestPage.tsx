import { useState } from "react";
import DynamicTestComponent from "../components/DynamicTestComponent";
import StartTestComponent from "../components/StartTestComponent";

import questions from "../MOCKS/questions.json";

const StartTestPage = () => {
  const [pageState, setPageState] = useState(0);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-cream">
      <div className="md:w-1/3 bg-pink h-20 md:h-auto w-full"></div>
      <div className="md:w-2/3 p-8 flex flex-col md:justify-center mx-auto w-full ">
        {pageState === 0 ? (
          <StartTestComponent setPageState={setPageState} />
        ) : (
          <DynamicTestComponent
            questions={questions}
            setPageState={setPageState}
          />
        )}
      </div>
    </div>
  );
};

export default StartTestPage;
