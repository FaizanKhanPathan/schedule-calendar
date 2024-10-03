import React, { useState } from "react";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createViewWeek, createViewMonthGrid } from "@schedule-x/calendar";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { Modal } from "antd";

import { FaRegShareSquare } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { FaRegCalendar } from "react-icons/fa";

import "@schedule-x/theme-default/dist/calendar.css";
// import TimeGridEvent from "./time-grid-event";

const SchedulerCalendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calendar = useCalendarApp({
    views: [createViewWeek(), createViewMonthGrid()],
    callbacks: {
      onEventClick(calendarEvent) {
        console.log("calendarEvent", calendarEvent);
        setIsModalOpen(true);
      },
    },
    events: [
      {
        id: "1",
        title: "My new event",
        start: "2025-01-01 00:00",
        end: "2025-01-01 01:25",
        status: "todo",
      },
      {
        id: "2",
        title: "My Event",
        start: "2025-01-01 03:00",
        end: "2025-01-01 04:00",
        status: "done",
      },
      {
        id: "3",
        title: "My Event",
        start: "2025-01-01 04:00",
        end: "2025-01-01 04:50",
        status: "done",
      },
      {
        id: "4",
        title: "My Event",
        start: "2025-01-04 05:00",
        end: "2025-01-04 07:00",
        status: "done",
      },
      {
        id: "5",
        title: "My Event",
        start: "2025-01-04 12:00",
        end: "2025-01-04 01:00",
        status: "done",
      },
      {
        id: "6",
        title: "My Event",
        start: "2025-01-02 02:00",
        end: "2025-01-02 03:15",
        status: "done",
      },
    ],
    selectedDate: "2025-01-01",
    plugins: [
      // createEventModalPlugin(),
      createDragAndDropPlugin(),
    ],
  });
  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
      <Modal title="Basic Modal" open={isModalOpen}>
        <div>
          <div className="flex justify-end items-center gap-2 text-xl text-gray-400 ">
            <span className="cursor-pointer">
              <FaRegShareSquare />
            </span>
            <span className="cursor-pointer">
              <CiSettings />
            </span>
            <span className="cursor-pointer">
              <MdOutlineEdit />
            </span>
            <span className="cursor-pointer">
              <RiDeleteBinLine />
            </span>
            <span
              className="cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              <ImCancelCircle />
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-14 h-14 bg-secondary rounded-xl flex justify-center items-center">
              <FaRegCalendar className="text-3xl text-white" />
            </div>
            <div>
              <h1 className="text-xl font-medium">15 November</h1>
              <p className="text-lg font-medium">10:00 - 11:00 AM</p>
            </div>
          </div>
          <div className="mt-2">
            <h1 className="text-lg font-bold">
              Upcoming song for morning prayers
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              delectus minima omnis fugit optio iure est hic dolorem aliquam
              porro.
            </p>
          </div>
          <div className="mt-2">
            <p>
              <span className="text-md font-medium">
                To be played in <span className="text-green-600">(15 min)</span>
              </span>
              <span></span>
            </p>
          </div>
          <h1 className="text-md font-bold mt-2">Playlist</h1>
          <div className="mt-4 flex justify-start items-start gap-4">
            <div className="w-14 h-14 bg-secondary rounded-lg"></div>
            <div className="text-wrap">
              <p className="text-md font-bold">Kesariya</p>
              <p className="text-wrap">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </div>
          <div className="mt-4 flex justify-start items-start gap-4">
            <div className="w-14 h-14 bg-secondary rounded-lg"></div>
            <div className="text-wrap">
              <p className="text-md font-bold">Kesariya</p>
              <p className="text-wrap">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <p className="text-secondary">Show More</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SchedulerCalendar;
