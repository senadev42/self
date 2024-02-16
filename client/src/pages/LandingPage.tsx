const LandingPage = () => {
  return (
    <>
      {/* Call to Action Hero Section */}
      <div className="herosection bg-cover bg-center">
        {/* Hero Copy Text */}
        <div className="flex flex-col items-center mx-auto md:w-1/2  text-blueish-200 font-mono font-extralight pb-5">
          <h1 className="text-3xl flex flex-col items-center mt-10 pt-6 mb-2">
            Discover Your True{" "}
            <span className="text-8xl mt-4 font-serif">Self</span>
          </h1>
          <p className="text-center my-10 text text-lg">
            Whether you're an introvert, extrovert, or{" "}
            <em>somewhere in between</em>, our test will shed light on your
            unique traits.
          </p>
          <button className="border-blueish-100 border-2 text-lg px-6 py-4 mt-4 rounded-xl mb-5 hover:bg-cream hover:border-cream">
            Take the Test!
          </button>
        </div>
      </div>
      {/* Some info: hero section */}
      <div className="bg-cream mb-5 pb-5">
        <div className="flex flex-col md:flex-row justify-center gap-x-10">
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
            subtitle="You do better around other people."
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
    <div className="flex flex-col items-center p-4 m-2 bg-pink-100 rounded-lg font-mono">
      <img src={imageSrc} alt={title} className="w-48" />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-sm mt-1 text-center">{subtitle}</p>
    </div>
  );
};

export default LandingPage;
