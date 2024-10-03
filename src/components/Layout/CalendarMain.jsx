import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Switch } from "@/components/ui/switch";
import { IoSettingsOutline } from "react-icons/io5";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import SchedulerCalendar from "./SchedulerCalendar";

const CalendarMain = () => {
  const [date, setDate] = useState(new Date());
  const [isFilter, setIsFilter] = useState("all");

  return (
    <div className="mt-2 px-4 flex flex-col md:ml-[260px] ml-0">
      <div className="px-4 md:px-0">
        <p className="text-md flex justify-start items-center gap-2 text-gray-400">
          <span className="cursor-pointer">
            <FaArrowLeftLong />
          </span>
          <span className="cursor-pointer">Back to Library</span>
        </p>

        <div className="flex flex-wrap justify-start items-center gap-3 my-5">
          <Button
            id="all"
            size="sm"
            className={`px-9 rounded-full shadow-xl hover:text-white hover:bg-secondary ${
              isFilter === "all"
                ? "text-white bg-secondary"
                : "text-black bg-white"
            }`}
            onClick={(e) => setIsFilter(e.target.id)}
          >
            All
          </Button>
          <Button
            id="listing"
            size="sm"
            className={`px-9 rounded-full shadow-xl hover:text-white hover:bg-secondary ${
              isFilter === "listing"
                ? "text-white bg-secondary"
                : "text-black bg-white"
            }`}
            onClick={(e) => setIsFilter(e.target.id)}
          >
            Listing
          </Button>
          <Button
            id="learning"
            size="sm"
            className={`px-9 rounded-full shadow-xl hover:text-white hover:bg-secondary ${
              isFilter === "learning"
                ? "text-white bg-secondary"
                : "text-black bg-white"
            }`}
            onClick={(e) => setIsFilter(e.target.id)}
          >
            Learning
          </Button>
          <Button
            id="rehearsal"
            size="sm"
            className={`px-9 rounded-full shadow-xl hover:text-white hover:bg-secondary ${
              isFilter === "rehearsal"
                ? "text-white bg-secondary"
                : "text-black bg-white"
            }`}
            onClick={(e) => setIsFilter(e.target.id)}
          >
            Rehearsal
          </Button>
          <Button
            id="perform"
            size="sm"
            className={`px-9 rounded-full shadow-xl hover:text-white hover:bg-secondary ${
              isFilter === "perform"
                ? "text-white bg-secondary"
                : "text-black bg-white"
            }`}
            onClick={(e) => setIsFilter(e.target.id)}
          >
            Perform
          </Button>
        </div>
      </div>

      <div className="bg-white flex flex-col px-4 md:px-0">
        <div className="h-24 flex justify-between items-center">
          <div className="ml-0 md:ml-14">
            <h1 className="font-semibold text-2xl underline decoration-slate-300">
              Calendar
            </h1>
          </div>
          <div className="flex justify-end items-center gap-3">
            <p>
              <MdLockOutline className="text-2xl" />
            </p>
            <p>Google Calendar</p>
            <p>
              <Switch />
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between h-full w-full">
          <div className="w-full md:w-[70%]">
            <SchedulerCalendar />
          </div>
          <div className="w-full md:w-[30%] flex flex-col px-3 mt-5 md:mt-0">
            <div className="w-full">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>

            <div className="mt-5 flex flex-col">
              <h1 className="font-semibold text-lg">Schedule</h1>
              <div className="flex flex-col mt-2 space-y-3">
                <div className="flex flex-wrap justify-between items-center">
                  <p className="bg-[#FFDCDC] px-2 rounded-full text-sm m-1">
                    Listen
                  </p>
                  <p className="bg-[#FFDCDC] px-2 rounded-full text-sm m-1">
                    Learn
                  </p>
                  <p className="bg-[#FFEBD4] px-2 rounded-full text-sm m-1">
                    Work-Out
                  </p>
                  <p className="bg-[#EAFFDC] px-2 rounded-full text-sm m-1">
                    Study
                  </p>
                </div>
              </div>
              <div className="flex flex-col mt-2 space-y-3">
                <div className="flex flex-wrap justify-between items-center">
                  <p className="bg-[#FFDCDC] px-2 rounded-full text-sm m-1">
                    Listen
                  </p>
                  <p className="bg-[#FFDCDC] px-2 rounded-full text-sm m-1">
                    Learn
                  </p>
                  <p className="bg-[#FFEBD4] px-2 rounded-full text-sm m-1">
                    Work-Out
                  </p>
                  <p className="bg-[#EAFFDC] px-2 rounded-full text-sm m-1">
                    Study
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col">
              <h1 className="font-semibold text-lg flex justify-between items-center">
                <span>Music</span>
                <span>
                  <IoSettingsOutline />
                </span>
              </h1>

              <div className="flex flex-col space-y-5 mt-5">
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <div className="whitespace-nowrap">Ronald rich playlist</div>
                  <Switch />
                  <AiTwotoneDelete className="text-2xl cursor-pointer" />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <div className="whitespace-nowrap">Ronald rich playlist</div>
                  <Switch />
                  <AiTwotoneDelete className="text-2xl cursor-pointer" />
                </div>
              </div>

              <div className="flex justify-center items-center mt-7">
                <Button
                  variant="secondary"
                  className="flex justify-start items-center gap-3 text-white rounded-full px-8 text-lg"
                >
                  <IoShareSocialSharp />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarMain;
