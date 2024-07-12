import hero from "../../assets/heroImage.svg";

const HeroSection = () => {
  return (
    <div className="bg-silver">
      <div className="flex items-center justify-evenly gap-16">
        <div className="flex justify-evenly items-center gap-20 my-16">
          <div className="m-4 p-4">
            <p className="text-[60px] font-bold text-darkGrey py-2">
              Lessons and insights <br />
              <p className="text-mainColorShadeOne leading-10 py-2">
                from 8 years
              </p>
            </p>
            <p className="font-light text-3xl m-2 text-grey mt-4">
              Where to grow your business as photographer: site or social media
            </p>
            <button className=" m-2 bg-mainColorShadeOne text-white mx-3.5 my-3.5 p-2 px-8 py-3-5 rounded-md">
              Register
            </button>
          </div>
          <div>
            <img src={hero} alt="hero" className="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-4 p-4 gap-2">
        <span className="bg-mainColorShadeOne rounded-full p-1 px-1 border-1"></span>
        <span className="bg-mainColorTintThree rounded-full p-1 px-1 border-1"></span>
        <span className="bg-mainColorTintFour rounded-full p-1 px-1 border-1"></span>
      </div>
    </div>
  );
};

export default HeroSection;
