import Mentor from "@/components/mentor/Mentor";
import React from "react";

export default function page() {
  return (
    <>
      <h1 className=" w-56 mx-auto  text-cyan-600 border-cyan-800  text-center text-4xl  border-b-4 items-center">
        Our Mentors
      </h1>
      <div className="flex gap-2 mt-10 ">
        <Mentor img="/greenBg.svg" name="Mentor" post="" />
        <Mentor img="/greenBg.svg" name="Mentor" post="" />
      </div>
    </>
  );
}
