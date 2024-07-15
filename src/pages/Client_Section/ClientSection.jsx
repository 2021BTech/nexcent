import client1 from "../../assets/client1.svg";
import client2 from "../../assets/client2.svg";
import client3 from "../../assets/client3.svg";
import client4 from "../../assets/client4.svg";
import client5 from "../../assets/client5.svg";
import client6 from "../../assets/client6.svg";
import client7 from "../../assets/client7.svg";
import user from "../../assets/user.svg";
import member from "../../assets/member.svg";
import group from "../../assets/group.svg";

const ClientSection = () => {
  return (
    <section className="bg-white">
      <div className="flex items-center justify-center">
        <span className="bg-red-400 border-1 w-8 p-0.5 m-1"></span>
      </div>
      <div className="text-center">
        <h1 className="text-[32px] font-bold text-darkGrey">Our Client</h1>
        <p className="font-light text-lightGrey mt-2">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      {/* client image */}
      <div className="m-2 p-2">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-items-center py-6">
          <img
            src={client1}
            alt="client1"
            className="w-full max-w-[100px] sm:max-w-[100px]"
          />
          <img
            src={client2}
            alt="client2"
            className="w-full max-w-[100px] sm:max-w-[100px]"
          />
          <img
            src={client3}
            alt="client3"
            className="w-full max-w-[100px] sm:max-w-[100px]"
          />
          <img
            src={client4}
            alt="client4"
            className="w-full max-w-[100px] sm:max-w-[100px]"
          />
          <img
            src={client5}
            alt="client5"
            className="w-full max-w-[100px] sm:max-w-[100px]"
          />
          <img
            src={client6}
            alt="client6"
            className="w-full max-w-[100px] sm:max-w-[100px]"
          />
          <img
            src={client7}
            alt="client7"
            className="w-full max-w-[150px] sm:max-w-[100px]"
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <span className="bg-red-400 border-1 w-8 p-0.5 m-1"></span>
      </div>
      <div className="text-center">
        <h1 className="text-[32px] font-bold text-darkGrey py-2 leading-9">
          Manage your entire community <br /> in a single system
        </h1>
        <p className="font-light text-lightGrey mt-0">
          Who is Nexcent suitable for?
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
        <div className="flex flex-col items-center justify-center text-center p-4 m-6">
          <div className="relative w-[100px] h-[100px]">
            <div className="absolute top-1/2 left-0 right-0 h-1/2 bg-mainColorTintFive"></div>
            <img
              src={user}
              alt="icon1"
              className="w-full h-full object-contain relative"
            />
          </div>
          <h1 className="text-[20px] font-bold text-darkGrey py-2 leading-3 mt-4">
            Membership Organization
          </h1>
          <p className="text-lightGrey line-clamp-3 m-6">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center p-4 m-6">
          <div className="relative w-[100px] h-[100px]">
            <div className="absolute top-1/2 left-0 right-0 h-1/2 bg-mainColorTintFive"></div>
            <img
              src={member}
              alt="icon1"
              className="w-full h-full object-contain relative"
            />
          </div>
          <h1 className="text-[20px] font-bold text-darkGrey py-2 leading-3 mt-4">
            National Associations
          </h1>
          <p className="text-lightGrey line-clamp-3 m-6">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center p-4 m-6">
          <div className="relative w-[100px] h-[100px]">
            <div className="absolute top-1/2 left-0 right-0 h-1/2 bg-mainColorTintFive"></div>
            <img
              src={group}
              alt="icon1"
              className="w-full h-full object-contain relative"
            />
          </div>
          <h1 className="text-[20px] font-bold text-darkGrey py-2 leading-3 mt-4">
            Clubs And Groups
          </h1>
          <p className="text-lightGrey line-clamp-3 m-6">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
