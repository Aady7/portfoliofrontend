import { HeroContent } from "../constants/constants";
import aadi from "../assets/images/aadi.png";

export default function Hero() {
  return (
    <div className="boreder-b border-neutral-900 pb-4  mx-auto ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-3/5 md:w-1/2 lg:p-8 ">
          <div className="flex flex-col items-center lg:items-start ">
            <h1 className="font-thin tracking-tight lg:text-9xl text-7xl lg:mt-10 ">
              Aditya
            </h1>
            <span className="text-neutral-300 py-auto my-auot text-2xl  sm:mt-6 bg-gradient-to-bl from-pink-500 via-blue-400 to-purple-400 bg-clip-text tracking-tight text-transparent ">
              Full Stack Developer
            </span>
            <p className="text-neutral-300 text-lg  justify-start  text-left mt-2 lg:mt-7 tracking-tight px-auto py-auto ">
              {HeroContent}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-2/5 md:w-1/2 lg:p-8">
        <div className="flex justify-center  overflow-hidden">
        <img
                src={aadi}
                alt="aadi"
                className=" object-cover  lg:mt-8 h-120 w-120 lg:justify-end lg:ml-16  rounded-b-full "
                
            />
      </div>
        </div>
        </div>
        </div>
    
  );
}
