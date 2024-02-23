import { Score } from "../pages/TestPage";
import IntrovertImage from "/assets/types/ambivert.png";
import AmbivertImage from "/assets/types/ambivert.png";
import ExtrovertImage from "/assets/types/extrovert.png";

interface ResultsProps {
  score: Score;
}

const ResultsComponent = ({ score }: ResultsProps) => {
  const totalScore = score.value;
  const totalQuestions = score.total;
  const percentage = (totalScore / totalQuestions) * 100;

  let personalityType;
  if (percentage < 33.33) {
    personalityType = {
      imageSrc: IntrovertImage,
      title: "Introvert",
      subtitle: "You do better alone.",
    };
  } else if (percentage >= 33.33 && percentage < 66.66) {
    personalityType = {
      imageSrc: AmbivertImage,
      title: "Ambivert",
      subtitle: "Neither here nor there.",
    };
  } else {
    personalityType = {
      imageSrc: ExtrovertImage,
      title: "Extrovert",
      subtitle: "You do better not-alone.",
    };
  }

  return (
    <div className="flex flex-col items-center justify-start">
      {/* Where are you on the scale? */}
      <div className="mb-4 bg-">
        {/* the markers */}
        <div className="flex flex-row justify-between text-xs">
          <div className="w-1 h-3 rounded-full bg-blueish-50"></div>
          <p>introvert</p>
          <div className="w-1 h-3 rounded-full bg-blueish-100"></div>
          <p>ambivert</p>
          <div className="w-1 h-3 rounded-full bg-blueish-100"></div>
          <p>extrovert</p>
          <div className="w-1 h-3 rounded-full bg-blueish-200"></div>
        </div>
        {/* the slider */}
        <input
          type="range"
          value={percentage}
          className="w-[20rem] h-2 bg-pink rounded-full appearance-none"
          disabled
        />
      </div>
      <p>You are an</p>
      <p className="text-lg font-bold mt-2 bg-pink px-2 rounded-md text-center">
        {personalityType.title}
      </p>
      <div className="w-48">
        <img src={personalityType.imageSrc} alt={personalityType.title} />
      </div>
      <div>
        <p className="text-sm mt-1 text-center">{personalityType.subtitle}</p>
      </div>

      {/* Take the test again */}
      <a className="mt-8 bg-blueish-100 text-white px-4 py-2 hover:bg-blueish-150" href="/starttest">
        Take the test again?
      </a>
    </div>
  );
};

export default ResultsComponent;
