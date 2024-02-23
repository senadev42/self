import { PAGESTATES } from "../pages/TestPage";

interface startpageProps {
  setPageState: (arg0: number) => void;
}


export const StartTestComponent = ({setPageState}: startpageProps) => {
  return (
    <>
      {/* intro */}
      <div className="text-justify text-base space-y-2">
        <p >
          This test consists of 5 questions each with 4 options. Each question has a weight and this is used to place you on a spectrum of extroversion.
        </p>
        <p >
          {" "}
          No right or wrong answers just pick whatever you resonate
          with.
        </p>
        <p className="text-lg"></p>
      </div>

      {/* bullet points */}
      <div>
        <button className="mt-8 bg-pink text-white font-bold py-2 px-4 rounded" onClick={()=> {setPageState(PAGESTATES.intest)}}>
          Begin Test
        </button>
        <ul className="mt-6 list-disc pl-4">
          <li className="text-sm text-gray-600 mb-2">
            The test will take approximately 10 minutes.
          </li>
          <li className="text-sm text-gray-600 mb-2">
            This test is for entertainment purposes only. Results may not
            accurately reflect your true personality.
          </li>
          <li className="text-sm text-gray-600 mb-2">
            Side effects may include increased self-awareness and introspection.
          </li>
        </ul>
      </div>
    </>
  );
};
export default StartTestComponent;
