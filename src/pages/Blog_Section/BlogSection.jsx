import blog1 from "../../assets/blog1.svg";
import blog2 from "../../assets/blog2.svg";
import blog3 from "../../assets/blog3.svg";

const BlogSection = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto">
        <h1 className="text-[32px] text-center text-darkGrey font-bold mb-8">
          Caring is the new marketing
          <p className="text-lightGrey text-[14px] font-light">
            The Nexcent blog is the best place to read about the latest
            membership insights,
            <br /> trends and more. See who&lsquo;s joining the community, read
            about how our community
            <br /> are increasing their membership income and lot&lsquo;s more.
          </p>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
          {/* Blog 1 */}
          <div className="relative">
            <img
              src={blog1}
              alt="Blog 1"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute -bottom-14 left-0 right-0 p-6 m-4 bg-gray-100 bg-opacity-100 rounded-lg ">
              <h2 className="text-xl text-darkGrey font-bold mb-2">
                Creating Streamlined Safeguarding Processes with OneRen
              </h2>
              <a
                href="#"
                className="text-mainColorShadeOne font-bold flex items-center"
              >
                Read more
                <span className="ml-2">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="relative">
            <img
              src={blog2}
              alt="Blog 1"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute -bottom-14 left-0 right-0 p-6 m-4 bg-gray-100 bg-opacity-100 rounded-lg">
              <h2 className="text-xl text-darkGrey font-bold mb-2">
                What are your safeguarding responsibilities and how can you
                manage them?
              </h2>

              <a
                href="#"
                className="text-mainColorShadeOne font-bold flex items-center"
              >
                Read more
                <span className="ml-2">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="relative">
            <img
              src={blog3}
              alt="Blog 1"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute -bottom-14 left-0 right-0 p-6 m-4 bg-gray-100 bg-opacity-100 rounded-lg">
              <h2 className="text-xl text-darkGrey font-bold mb-2">
                Revamping the Membership Model with Triathlon Australia and its
                coast
              </h2>

              <a
                href="#"
                className="text-mainColorShadeOne font-bold flex items-center"
              >
                Read more
                <span className="ml-2">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
