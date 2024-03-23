import moment from "moment";
import Image from "next/image";
import React from "react";
import ImageGallery from "../ImageHomeGallary/ImageHomeGallary";
import EventFormParticular from "@/components/Event/EventFormProvider";
import Link from "next/link";

const EventDetail = ({ newsData }) => {
  const { title, content, thumbNail, publishedDate, uuid } = newsData;

  return (
    <>
      <div className="w-full">
        <h1 className="p-4 text-center text-5xl font-extrabold">{title}</h1>
        {/* <div className="w-full h-20 flex justify-center items-center">
          <button className="bg-cyan-400 p-4 rounded-b-xl hover:bg-green-500 duration-100 font-bold text-lg mx-4">
            Location: {location}
          </button>
          <button className="bg-cyan-400 p-4 rounded-b-xl hover:bg-green-500 duration-100 font-bold text-lg mx-4">
            Start Date: {moment(startDate).format("DD-MM-YYYY")}
          </button>
          <button className="bg-cyan-400 p-4 rounded-b-xl hover:bg-green-500 duration-100 font-bold text-lg mx-4">
            Start Time: {moment(startDate).format("h:mm:ss A")}
          </button>
          <button className="bg-cyan-400 p-4 rounded-b-xl hover:bg-green-500 duration-100 font-bold text-lg mx-4">
            End Date: {moment(endDate).format("DD-MM-YYYY")}
          </button>
          <button className="bg-cyan-400 p-4 rounded-b-xl hover:bg-green-500 duration-100 font-bold text-lg mx-4">
            End Time: {moment(endDate).format("h:mm:ss A")}
          </button>
        </div> */}
        <div className="flex justify-between items-center mt-4 w-11/12 mx-auto">
          <div className="w-1/3 mx-auto p-6 text-lg font-semibold ">
            <EventFormParticular />
          </div>
          <main
            className="rounded-md w-1/2 mx-auto  h-96 flex flex-col justify-center  p-5  bg-cover bg-center border-2 border-tgreen"
            style={{ backgroundImage: `url(${thumbNail})` }}
          ></main>
        </div>
      </div>

      <div className="w-9/12 p-4 mx-auto">
        <h1 className="text-2xl font-bold">Description</h1>
        <p>{content}</p>
      </div>

      <div className="w-11/12 mx-auto">
        <ImageGallery />
      </div>
      <div className="m-10 font-bold"><Link href='/newsCard' className='border-2 bg-purple-500 py-4 px-20 rounded-lg'>All Archives</Link></div>
      
    </>
  );
};

export default EventDetail;
