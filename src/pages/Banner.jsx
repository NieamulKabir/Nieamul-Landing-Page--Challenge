import { useEffect, useState } from "react";
import bgImage1 from "../assets/bgImage.png";
import bgImage2 from "../assets/Image.png";
import bgImage3 from "../assets/bgImage.png";
import { FaCartShopping } from "react-icons/fa6";
const Banner = () => {
  const bgImages = [bgImage1, bgImage2, bgImage3];
  const [currentBgImage, setCurrentBgImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgImage((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <section
      className="w-full min-h-screen lg:h-[918px]  bg-[#EAEAEA] mt-20"
      style={{
        backgroundImage: `url(${bgImages[currentBgImage]})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative ms-4 md:ms-[240px] flex flex-col md:flex-row justify-between">
        <div className="mt-[422px] sm:-ml-10">
          <h1 className="text-2xl md:text-4xl font-bold ">
            Personalized Eyeglass <br /> Shopping
          </h1>
          <button className="flex btn px-[40px] mt-[20px] md:mt-[52px] bg-black text-white">
            <FaCartShopping className="h-[22px] w-[22px] " />
            Buy Now
          </button>
        </div>

        <div className="mt-10 md:mt-[422px] flex md:flex-col gap-6 mr-20">
          {bgImages.map((item, index) => (
            <div
              key={index}
              onClick={() => setCurrentBgImage(index)}
              className={`h-[25px] w-[25px] rounded-full cursor-pointer ${
                currentBgImage === index
                  ? "bg-[#f2cd9f] border-4 border-gray-300 "
                  : "bg-[#c1bebe]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
