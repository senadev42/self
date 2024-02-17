export const StartTestComponent = () => {
  return (
    <>
      {/* intro */}
      <div className="text-justify">
        <p className="text-lg">
          This test consists of 3-5 thought-provoking questions crafted to
          unravel the intricacies of your inner psyche.
        </p>
        <p className="text-lg mt-2">
          {" "}
          There's no right or wrong answers just pick whatever you resonate
          with.
        </p>
        <p className="text-lg"></p>
      </div>

      {/* bullet points */}
      <div>
        <button className="mt-8 bg-pink text-white font-bold py-2 px-4 rounded">
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
