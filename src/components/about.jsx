import { AboutMeConten } from "../constants/constants";
import aadi from "../assets/images/aadi.png";
import aboutme2 from "../assets/images/aboutme2.png";
export default function Aboutme() {
  return (
    <div className="border-b border-neutral-900 pb-4 mt-20">
      <h1 className=" mb-4 mx-auto  text-center text-5xl sm:7xl font-thin lg:mt-30">About Me</h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/3 md:w-1/3 ">
          <div className="flex items-center justify-center mx-auto my-auto  ">
            <img
              className="object-cover sm:h-120 sm:w-120 lg:mt-0 lg:pb-20 mx-auto my-auto py-auto px-auto"
              src={aboutme2}
              alt="aadi"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3 md:w-2/3  mx-auto  my-auto ">
          <div className="flex justify-center itme-center ">
            <p className="text-neutral-300 text-lg tracking-tight text-center sm:max-w-3xl max-w-xl ">
              {AboutMeConten}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
