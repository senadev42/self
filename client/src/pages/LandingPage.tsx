const LandingPage = () => {
  return (
    <>
      {/* Call to Action Hero Section */}
      <div className="herosection bg-cover bg-center">
        {/* Hero Copy Text */}
        <div className="flex flex-col items-center mx-auto md:w-1/2  text-blueish-200  font-extralight pb-2">
          <h1 className="text-3xl flex flex-col items-center mt-2 pt-6 mb-2">
            <em>Discover Your True{" "}</em>
            <span className="text-8xl mt-4 font-serif">Self</span>
          </h1>
          <p className="text-center my-10 text text-lg mx-3 font-mono">
            Are you an introvert? an extrovert? {" "}
            <em>something in between?</em> Does it even matter? Take the test and find out.
          </p>
          <button className="border-blueish-100 bg-blueish-100 border-2 text-lg px-6 py-4 rounded-md mb-5 hover:bg-cream hover:border-cream font-mono">
            Take the Test!
          </button>
        </div>
      </div>
      {/* Some info: hero section */}
      <div className="bg-cream mb-5 pb-5">
        <div className="flex flex-col md:flex-row justify-center gap-x-10 ">
          <PersonalityType
            imageSrc="/assets/types/introvert.png"
            title="I n t r o v e r t"
            subtitle="You do better alone."
          />
          <PersonalityType
            imageSrc="/assets/types/ambivert.png"
            title="A m b i v e r t"
            subtitle="Niether here nor there."
          />
          <PersonalityType
            imageSrc="/assets/types/extrovert.png"
            title="E x t r o v e r t"
            subtitle="You do better not-alone."
          />
        </div>
      </div>
    </>
  );
};

type PersonalityTypeProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
};

const PersonalityType = ({
  imageSrc,
  title,
  subtitle,
}: PersonalityTypeProps) => {
  return (
    <div className="flex flex-col items-center p-4 m-2 bg-pink-100 rounded-lg font-mono ">
      <img src={imageSrc} alt={title} className="w-48 hover:hover-filter hover:hue-rotate-90 transition duration-500" />
      <h2 className="text-lg font-bold mt-2 bg-pink px-2 rounded-md">{title}</h2>
      <p className="text-sm mt-1 text-center">{subtitle}</p>
    </div>
  );
};

export default LandingPage;
