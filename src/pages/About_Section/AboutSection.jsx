import group from "../../assets/askMe.svg";
import user from "../../assets/person.svg";
import member from "../../assets/group.svg";
import people from "../../assets/people.svg";
import wallet from "../../assets/wallet.svg";

const AboutSection = () => {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-16 p-4 md:p-8">
        <div className="m-4 p-4">
          <img src={group} alt="Group" className="w-full h-auto" />
        </div>
        <div className="m-4 p-4">
          <h1 className="text-[32px] text-darkGrey font-bold leading-10 py-2">
            The unseen of spending three
            <br /> years at Pixelgrade
          </h1>
          <p className="text-lightGrey">
            Spending three years at Pixelgrade has been an extraordinary journey
            filled with challenges, growth, and remarkable achievements. During
            this time, we have worked on a diverse range of projects, each
            contributing to our collective knowledge and expertise. The initial
            days were a blend of excitement and uncertainty as we navigated
            through the complexities of our projects.
          </p>
          <button className="bg-mainColorShadeOne text-white px-3.5 py-3 my-4 shadow-sm rounded-sm">
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-silver">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-16 p-4 md:p-8">
          <div className="m-4 p-4">
            <h1 className="text-[32px] text-darkGrey font-bold leading-10 py-2">
              Helping a local
              <br />
              <span className="text-mainColorShadeOne">
                business reinvent itself
              </span>
            </h1>
            <p className="text-darkGrey font-normal">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="grid grid-cols-2 items-center justify-center gap-4 md:gap-8 p-4 md:p-8">
            <div className="flex flex-row items-center justify-center gap-4">
              <img src={user} alt="User" className="w-10" />
              <p className="text-[24px] font-bold text-darkGrey leading-6">
                2,245,341 <br />
                <span className="text-[16px] text-lightGrey font-light">
                  members
                </span>
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <img src={member} alt="Member" className="w-18 text-mainColor" />
              <p className="text-[24px] font-bold text-darkGrey leading-6">
                2,245,341 <br />
                <span className="text-[16px] text-lightGrey font-light">
                  members
                </span>
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <img src={people} alt="People" className="w-10" />
              <p className="text-[24px] font-bold text-darkGrey leading-6">
                2,245,341 <br />
                <span className="text-[16px] text-lightGrey font-light">
                  members
                </span>
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <img src={wallet} alt="Wallet" className="w-10" />
              <p className="text-[24px] font-bold text-darkGrey leading-6">
                2,245,341 <br />
                <span className="text-[16px] text-lightGrey font-light">
                  members
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
