import hero from "../../assets/heroImage.svg";

const HeroSection = () => {
  return (
    <section className="bg-silver">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 p-4 md:p-8">
        <div className="text-center md:text-left m-4 p-4">
          <p className="text-4xl md:text-[60px] font-bold text-darkGrey py-2">
            Lessons and insights <br />
            <span className="text-mainColorShadeOne leading-10 py-2">
              from 8 years
            </span>
          </p>
          <p className="font-light text-xl md:text-3xl m-2 text-grey mt-4">
            Where to grow your business as a photographer: site or social media
          </p>
          <button className="m-2 bg-mainColorShadeOne text-white p-2 px-4 md:px-8 py-2.5 rounded-md">
            Register
          </button>
        </div>
        <div className="m-4 p-4">
          <img src={hero} alt="hero" className="w-full h-auto" />
        </div>
      </div>
      <div className="flex justify-center items-center m-4 p-4 gap-2">
        <span className="bg-mainColorShadeOne rounded-full p-1 px-1 border-1"></span>
        <span className="bg-mainColorTintThree rounded-full p-1 px-1 border-1"></span>
        <span className="bg-mainColorTintFour rounded-full p-1 px-1 border-1"></span>
      </div>
    </section>
  );
};

export default HeroSection;
