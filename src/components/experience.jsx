import { experienceContent } from "../constants/constants";
export default function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className=" mt-20 mb-10  text-center text-5xl  font-thin ">Experience</h1>
      <div className="flex flex-wrap">
        {experienceContent.map((experience, index) => (
          <div key={index} className="w-full lg:w-1/2 md:w-1/2 lg:mt-10 ">
            <div className="flex justify-center items-center ">
              <div className="flex flex-col items-center lg:items-start lg:ml-10 mr-2 ml-3 ">
                <h1 className=" text-neutral-100 text-2xl lg:text-2xl font-thin tracking-tighter   ">
                  {experience.title}
                </h1>
                <span className="text-neutral-100 text-xl tracking-tighter font-thin  ">
                  {experience.company}
                </span>
                <span className="text-neutral-400  lg:mt-10 md:mt-6 tracking-tighter ">
                  {experience.duration}
                </span>
                <ul className=" text-neutral-400 lg:text-xl  justify-start text-left mt-2 lg:mt-7 tracking-tighter mb-10 ">
                  {experience.description.map((point, index) => (
                    <li key={index} className="list-none list-inside mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}