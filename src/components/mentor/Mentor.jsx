import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const Mentor = ({ img,name,post }) => {
  return (
    <div
      className="w-full flex justify-center
     lg:h-64 h-40 "
    >
      <div className="relative group transition-transform duration-[3000ms] lg:w-64 w-40 lg:h-64 h-40 shadow-[#464445_0px_3px_8px] overflow-hidden rounded-lg">
        <div className="">
          <div className="mx-auto flex justify-center rounded-lg lg:w-64 w-40 lg:h-64 h-40  overflow-hidden ">
            <Image
              src={img}
              alt={"jhhh"}
              width={1000}
              height={100}
            />
          </div>
        </div>
        <div className="mx-auto  bg-gray-300 bg-opacity-35  p-2 lg:w-64 w-40 lg:h-64 h-40 overflow-hidden group-hover:-translate-y-40   lg:group-hover:-translate-y-24 transition transform duration-[600ms] -translate-y-14">
          <h1 className="font-bold lg:text-lg text-md lg:p-2  text-black text-shadow-[2px_2px_4px_#706A6B]">
           {name}
          </h1>
          <p className=" font-semibold text-xs lg:text-sm py-1 lg:px-2 lg:h-32 h-14 overflow-hidden text-gray-700">
            {post}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Mentor;
