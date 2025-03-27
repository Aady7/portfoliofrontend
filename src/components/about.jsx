import { AboutMeConten } from "../constants/constants";
import aadi from "../assets/images/aadi.png";
import aboutme2 from "../assets/images/aboutme2.png";
export default function Aboutme() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className=" mt-16 mb-0 text-center text-7xl lg:7xl font-thin lg:mt-30">About Me</h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 md:w-1/2 ">
          <div className="flex items-center justify-center  ">
            <img
              className="object-cover h-120 w-120 rounded-3xl lg:mt-0 lg:pb-20 "
              src={aboutme2}
              alt="aadi"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 md:w-1/2 lg:mt-10 ">
          <div className="flex justify-center ">
            <p className="text-neutral-300 text-xl tracking-tighter text-left max-w-xl py-10 ">
              {AboutMeConten}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
