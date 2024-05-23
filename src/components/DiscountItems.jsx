import Bravo from "../assets/discountModel/Bravo.png";
import Tommy from "../assets/discountModel/Tommy.png";
import John from "../assets/discountModel/John.png";
import Vincent from "../assets/discountModel/Vincent.png";

const DiscountItems = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center mb-24 px-4 md:mb-32 lg:mb-[150px] mx-auto max-w-screen-xl ">
      <div className="flex justify-center items-center w-full relative lg:top-10 ">
        <img src={Bravo} alt="Bravo" className="w-full h-full object-cover" />

        <div className="absolute bottom-[20px] sm:bottom-[40px] left-[20px] sm:left-[40px] p-2 sm:p-4 lg:w-[483px] lg:h-[225px]">
          <div className="bg-white p-4 lg:p-8 flex flex-col items-center justify-center text-center font-primary">
            <h4 className="font-bold text-sm sm:text-base lg:text-2xl mb-1 sm:mb-2">
              Bravo Sunglasses
            </h4>
            <p className="text-xs sm:text-sm lg:text-lg mb-2 sm:mb-4">
              Up to 80% off on selected items
            </p>
            <button className="text-white mb-4 sm:mb-8 font-bold gap-4 px-2 py-2 rounded sm:rounded-md lg:px-3 lg:py-2 bg-[#383838] items-center justify-center w-3/4 sm:w-1/2 lg:w-[158px] lg:h-[48px]">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative lg:left-8 lg:bottom-5 flex justify-center items-center w-full">
        <img src={Tommy} alt="Tommy" className="w-full h-full object-cover" />

        <div className="absolute bottom-[20px] sm:bottom-[40px] left-[20px] sm:left-[40px] right-4 p-2 sm:p-4 lg:w-[483px] lg:h-[225px]">
          <div className="bg-white p-4 lg:p-8 flex flex-col items-center justify-center text-center font-primary">
            <h4 className="font-bold text-sm sm:text-base lg:text-2xl mb-1 sm:mb-2">
              Tommy Hilfiger
            </h4>
            <p className="text-xs sm:text-sm lg:text-lg mb-2 sm:mb-4">
              Up to 30% off on selected items
            </p>
            <button className="text-white mb-4 sm:mb-8 font-bold gap-4 px-2 py-2 rounded sm:rounded-md lg:px-3 lg:py-2 bg-[#383838] items-center justify-center w-3/4 sm:w-1/2 lg:w-[158px] lg:h-[48px]">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center w-full">
        <img src={John} alt="John" className="w-full h-full object-cover" />

        <div className="absolute bottom-[20px] sm:bottom-[40px] left-[20px] sm:left-[40px] p-2 sm:p-4 lg:w-[483px] lg:h-[225px]">
          <div className="bg-white p-4 lg:p-8 flex flex-col items-center justify-center text-center font-primary">
            <h4 className="font-bold text-sm sm:text-base lg:text-2xl mb-1 sm:mb-2">
              John Jacobs
            </h4>
            <p className="text-xs sm:text-sm lg:text-lg mb-2 sm:mb-4">
              Up to 40% off on selected items
            </p>
            <button className="text-white mb-4 sm:mb-8 font-bold gap-4 px-2 py-2 rounded sm:rounded-md lg:px-3 lg:py-2 bg-[#383838] items-center justify-center w-3/4 sm:w-1/2 lg:w-[158px] lg:h-[48px]">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative lg:left-8 lg:bottom-16 flex justify-center items-center w-full">
        <img
          src={Vincent}
          alt="Vincent"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-[20px] sm:bottom-[40px] left-[20px] sm:left-[40px] p-2 sm:p-4 lg:w-[483px] lg:h-[225px]">
          <div className="bg-white p-4 lg:p-8 flex flex-col items-center justify-center text-center font-primary">
            <h4 className="font-bold text-sm sm:text-base lg:text-2xl mb-1 sm:mb-2">
              Vincent Chase
            </h4>
            <p className="text-xs sm:text-sm lg:text-lg mb-2 sm:mb-4">
              Up to 10% off on selected items
            </p>
            <button className="text-white mb-4 sm:mb-8 font-bold gap-4 px-2 py-2 rounded sm:rounded-md lg:px-3 lg:py-2 bg-[#383838] items-center justify-center w-3/4 sm:w-1/2 lg:w-[158px] lg:h-[48px]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountItems;
