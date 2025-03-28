import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";

export default function TechStacks() {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
      <h1 className="text-center my-20 sm:text-7xl text-5xl  font-thin ">
        Tech Stacks
      </h1>
      <div className=" flex flex-wrap justify-center item-center gap-4">
        <div className="border-4 rounded-2xl p-4 border-neutral-700">
          <FaReact className="text-5xl text-cyan-400 " />
        </div>
        <div className="border-4 rounded-2xl p-4 border-neutral-700">
          <FaNodeJs className="text-5xl text-green-700 " />
        </div>
        
        <div className="border-4 rounded-2xl border-neutral-700 p-4">
          <DiMongodb className="text-5xl text-green-400 " />
        </div>
        <div className="border-4 rounded-2xl border-neutral-700 p-4">
          <FaGitAlt className="text-5xl text-red-400 " />
        </div> <div className="border-4 rounded-2xl border-neutral-700 p-4">
          <FaDocker className="text-5xl text-cyan-400 " />
        </div> <div className="border-4 rounded-2xl border-neutral-700 p-4">
          <TbBrandNextjs className="text-5xl text-white " />
        </div> <div className="border-4 rounded-2xl border-neutral-700 p-4">
          <SiMysql className="text-5xl text-cyan-400 " />
        </div>
      </div>
    </div>
  );
}
