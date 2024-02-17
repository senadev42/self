import DynamicTestComponent from "../components/DynamicTestComponent";
import StartTestComponent from "../components/StartTestComponent";


import questions from '../MOCKS/questions.json';

const StartTestPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-cream">
      <div className="md:w-1/3 bg-pink h-20 md:h-auto w-full"></div>
      <div className="md:w-2/3 p-8 flex flex-col md:justify-center mx-auto w-full ">

          {/* when an event comes out of this, the test will have started and we'll switch to the other component */}
          {/* <StartTestComponent /> */}

          <DynamicTestComponent questions={questions} />
      </div>
    </div>
  );
};

export default StartTestPage;
