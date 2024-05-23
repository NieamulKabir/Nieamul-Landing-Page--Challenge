import oval from "../assets/Oval.png";
import dot from "../assets/dot.png";
import search from "../assets/search.png";
import paymentlogo from "../assets/paymentlogo.png";
import car from "../assets/car.png";

const BuyProcess = () => {
  return (
    <div className="relative pt-10 z-10 bottom-24">
      <div className="flex flex-col font-primary lg:flex-row p-2 gap-[15px] text-center items-center justify-center bottom-10 relative">
        {/* Step-1 */}
        <div className="flex flex-col items-center w-[189px] h-[236px]">
          <div>
            <img
              className=" mb-2 w-[130px] h-[130px] relative top-3 right-1"
              src={oval}
              alt=""
            />
            <div className="relative bottom-20 left-10 items-center justify-center z-10">
              {" "}
              <img
                width="w-15"
                src={search}
                alt=""
              />
            </div>
          </div>

          <h4 className="font-primary text-xl font-bold mb-1">
            Search you sunglass
          </h4>
          <p className="text-sm font-primary">Shop Stylish Eye wear Now</p>
        </div>
        {/* dot */}
        <div className="w-[151px] h-[15px] lg:block relative z-10 bottom-8 mt-3 md:mt-0">
          <img
            className="w-[151px] h-[15px]"
            src={dot}
            alt="dot"
          />
        </div>

        {/* Step-2 */}
        <div className="flex flex-col items-center w-[189px] h-[236px]">
          <a href="">
            <img
              className=" mb-2 w-[130px] h-[130px] relative top-2 right-1"
              src={oval}
              alt=""
            />
            <div className="relative bottom-20 left-10 items-center justify-center z-10">
              {" "}
              <img
                width="w-15"
                src=""
                alt=""
              />
            </div>
          </a>
          <h4 className="font-primary text-xl font-bold mb-1 mt-9">
            Select sunglass
          </h4>
          <p className="text-sm font-primary">Shade Your Style</p>
        </div>
        {/* dot */}
        <div className=" lg:block relative z-10 bottom-8  mt-3 md:mt-0">
          <img src={dot} alt="dot" />
        </div>


        {/* Step-3 */}
        <div className="flex flex-col items-center w-[189px] h-[236px] ">
          <div>
            <img
              className=" mb-2 w-[130px] h-[130px] relative top-2 right-1"
              src={oval}
              alt=""
            />
            <div className="relative bottom-20 left-10 items-center justify-center z-10">
              {" "}
              <img
                width="w-15"
                src={paymentlogo}
                alt=""
              />
            </div>
          </div>
          <h4 className="font-primary text-xl font-bold mb-1">Make Payment</h4>
          <p className="text-sm font-primary">Securely Checkout now</p>
        </div>
        {/* dot */}
        <div className=" lg:block relative z-10 bottom-8  mt-3 md:mt-0" >
          <img src={dot} alt="dot" />
        </div>
        {/* Step-4 */}
        <div className="flex flex-col items-center w-[189px] h-[236px]">
          <a href="">
            <img
              className=" mb-2 w-[130px] h-[130px] relative top-2 right-1"
              src={oval}
              alt=""
            />
            <div className="relative bottom-20 left-10 items-center justify-center z-10">
              {" "}
              <img width="w-15" src={car} alt="" />
            </div>
          </a>
          <h4 className="font-primary text-xl font-bold mb-1">
            Received Product
          </h4>
          <p className="text-sm font-primary">See the World Clearly</p>
        </div>
      </div>
    </div>
  );
};

export default BuyProcess;
