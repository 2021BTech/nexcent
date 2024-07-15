import lock from "../../assets/lock.svg";
import anchor from "../../assets/anchor.svg";
import client1 from "../../assets/client1.svg";
import client2 from "../../assets/client2.svg";
import client3 from "../../assets/client3.svg";
import client4 from "../../assets/client4.svg";
import client5 from "../../assets/client5.svg";
import client6 from "../../assets/client6.svg";

const Features = () => {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-16 p-4 md:p-8">
        <div className="m-4 p-4">
          <img src={lock} alt="Group" className="w-full h-auto" />
        </div>
        <div className="m-4 p-4">
          <h1 className="text-[32px] text-darkGrey font-bold leading-10 py-2">
            How to design your site footer like
            <br /> we did
          </h1>
          <p className="text-lightGrey">
            We have celebrated numerous milestones, from successful project
            launches to personal growth moments for each team member. This
            journey has been more than just professional development; it has
            been about creating lasting relationships, fostering a collaborative
            environment, and pushing the boundaries of our creative and
            technical abilities. Through the ups and downs, we have learned the
            importance of resilience, adaptability, and continuous learning. The
            experiences and lessons gained during these years have not only
            shaped our professional paths but have also left an indelible mark
            on our personal lives. We invite you to explore the unseen aspects
            of our three-year journey at Pixelgrade and discover the stories
            behind our success.
          </p>
          <button className="bg-mainColorShadeOne text-white px-3.5 py-3 my-4 shadow-sm rounded-sm">
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-silver">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-16 p-4 md:p-8">
          <div className="mx-32 p-2">
            <img src={anchor} alt="Group" className="w-full h-auto" />
          </div>
          <div className="m-4 p-4">
            <p className="text-lightGrey">
              We have celebrated numerous milestones, from successful project
              launches to personal growth moments for each team member. This
              journey has been more than just professional development; it has
              been about creating lasting relationships, fostering a
              collaborative environment, and pushing the boundaries of our
              creative and technical abilities. Through the ups and downs, we
              have learned the importance of resilience, adaptability, and
              continuous learning. The experiences and lessons gained during
              these years have not only shaped our professional paths but have
              also left an indelible mark on our personal lives. We invite you
              to explore the unseen aspects of our three-year journey at
              Pixelgrade and discover the stories behind our success.
            </p>
            <p className="text-mainColorShadeOne font-bold py-2">Tim Smith</p>
            <p className="text-lightGrey py-2">
              British Dragon Boat Racing Association
            </p>

            <div className="m-4 p-4">
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center justify-center">
                <img src={client1} alt="client" className="w-full h-auto" />
                <img src={client2} alt="client" className="w-full h-auto" />
                <img src={client3} alt="client" className="w-full h-auto" />
                <img src={client4} alt="client" className="w-full h-auto" />
                <img src={client5} alt="client" className="w-full h-auto" />
                <img src={client6} alt="client" className="w-full h-auto" />
              </div>
              <a
                href="#"
                className="text-mainColorShadeOne font-bold flex items-center mt-4"
              >
                Meet all customers
                <span className="ml-2">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
