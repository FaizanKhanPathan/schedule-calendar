// import React, { useState } from "react";
// import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
// import {
//   createViewWeek,
//   createViewDay,
//   createViewMonthGrid,
// } from "@schedule-x/calendar";
// import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
// import { Modal } from "antd";

// import { FaRegShareSquare } from "react-icons/fa";
// import { CiSettings } from "react-icons/ci";
// import { MdOutlineEdit } from "react-icons/md";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { ImCancelCircle } from "react-icons/im";
// import { FaRegCalendar } from "react-icons/fa";

// import "@schedule-x/theme-default/dist/calendar.css";
// // import TimeGridEvent from "./time-grid-event";

// const SchedulerCalendar = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const calendar = useCalendarApp({
//     views: [createViewWeek(), createViewDay(), createViewMonthGrid()],
//     callbacks: {
//       onEventClick(calendarEvent) {
//         console.log("calendarEvent", calendarEvent);
//         setIsModalOpen(true);
//       },
//     },
//     events: [
//       {
//         id: "1",
//         title: "My new event",
//         start: "2025-01-01 00:00",
//         end: "2025-01-01 01:25",
//         status: "todo",
//       },
//       {
//         id: "2",
//         title: "My Event",
//         start: "2025-01-01 03:00",
//         end: "2025-01-01 04:00",
//         status: "done",
//       },
//       {
//         id: "3",
//         title: "My Event",
//         start: "2025-01-01 04:00",
//         end: "2025-01-01 04:50",
//         status: "done",
//       },
//       {
//         id: "4",
//         title: "My Event",
//         start: "2025-01-04 05:00",
//         end: "2025-01-04 07:00",
//         status: "done",
//       },
//       {
//         id: "5",
//         title: "My Event",
//         start: "2025-01-04 12:00",
//         end: "2025-01-04 01:00",
//         status: "done",
//       },
//       {
//         id: "6",
//         title: "My Event",
//         start: "2025-01-02 02:00",
//         end: "2025-01-02 03:15",
//         status: "done",
//       },
//     ],
//     selectedDate: "2025-01-01",
//     plugins: [
//       // createEventModalPlugin(),
//       createDragAndDropPlugin(),
//     ],
//   });

//   // const calendarApp = useCalendarApp({
//   //   views: {
//   //     week: createViewWeek(),
//   //     month: createViewMonthGrid(),
//   //   },
//   //   plugins: [createDragAndDropPlugin()],
//   // });
//   // const changeView = (viewType) => {
//   //   calendarApp.setView(viewType);
//   // };
//   return (
//     <div>
//       <ScheduleXCalendar calendarApp={calendar} />
//       <Modal title="Basic Modal" open={isModalOpen}>
//         <div>
//           <div className="flex justify-end items-center gap-2 text-xl text-gray-400 ">
//             <span className="cursor-pointer">
//               <FaRegShareSquare />
//             </span>
//             <span className="cursor-pointer">
//               <CiSettings />
//             </span>
//             <span className="cursor-pointer">
//               <MdOutlineEdit />
//             </span>
//             <span className="cursor-pointer">
//               <RiDeleteBinLine />
//             </span>
//             <span
//               className="cursor-pointer"
//               onClick={() => setIsModalOpen(false)}
//             >
//               <ImCancelCircle />
//             </span>
//           </div>
//           <div className="flex items-center gap-2 mt-2">
//             <div className="w-14 h-14 bg-secondary rounded-xl flex justify-center items-center">
//               <FaRegCalendar className="text-3xl text-white" />
//             </div>
//             <div>
//               <h1 className="text-xl font-medium">15 November</h1>
//               <p className="text-lg font-medium">10:00 - 11:00 AM</p>
//             </div>
//           </div>
//           <div className="mt-2">
//             <h1 className="text-lg font-bold">
//               Upcoming song for morning prayers
//             </h1>
//             <p className="text-gray-400">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
//               delectus minima omnis fugit optio iure est hic dolorem aliquam
//               porro.
//             </p>
//           </div>
//           <div className="mt-2">
//             <p>
//               <span className="text-md font-medium">
//                 To be played in <span className="text-green-600">(15 min)</span>
//               </span>
//               <span></span>
//             </p>
//           </div>
//           <h1 className="text-md font-bold mt-2">Playlist</h1>
//           <div className="mt-4 flex justify-start items-start gap-4">
//             <div className="w-14 h-14 bg-secondary rounded-lg"></div>
//             <div className="text-wrap">
//               <p className="text-md font-bold">Kesariya</p>
//               <p className="text-wrap">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//               </p>
//             </div>
//           </div>
//           <div className="mt-4 flex justify-start items-start gap-4">
//             <div className="w-14 h-14 bg-secondary rounded-lg"></div>
//             <div className="text-wrap">
//               <p className="text-md font-bold">Kesariya</p>
//               <p className="text-wrap">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//               </p>
//             </div>
//           </div>
//           <div className="mt-4 flex justify-end">
//             <p className="text-secondary">Show More</p>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default SchedulerCalendar;

import React, { useCallback, useState } from "react";
import { Modal } from "antd";

import { FaRegShareSquare } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { FaRegCalendar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Button } from "../ui/button";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import moment from "moment";

// Sample events
const events = [
  {
    title: "Meeting with Bob",
    start: new Date(2022, 5, 22, 10, 0), // June 22, 2022, 10:00 AM
    end: new Date(2022, 5, 22, 11, 0), // June 22, 2022, 11:00 AM
  },
  {
    title: "Lunch with Sarah",
    start: new Date(2023, 9, 4, 12, 0), // October 4, 2023, 12:00 PM
    end: new Date(2023, 9, 4, 13, 0), // October 4, 2023, 1:00 PM
  },
  {
    title: "Team Meeting",
    start: new Date(2023, 9, 5, 9, 30), // October 5, 2023, 9:30 AM
    end: new Date(2023, 9, 5, 11, 30), // October 5, 2023, 11:30 AM
  },
  {
    title: "Default Event",
    start: new Date(2022, 4, 22, 10, 0), // May 22, 2022, 10:00 AM
    end: new Date(2022, 4, 22, 11, 0), // May 22, 2022, 11:00 AM
  },
  {
    title: "Default",
    start: new Date(2022, 4, 22, 1, 0), // May 22, 2022, 10:00 AM
    end: new Date(2022, 4, 22, 2, 0), // May 22, 2022, 11:00 AM
  },
];

// Setup dateFns Localizer
const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }), // Sunday start of the week
  getDay,
  locales,
});

const SchedulerCalendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState("week");
  const [date, setDate] = useState(moment("2022-05-22").toDate());
  const [calendarEvents, setCalendarEvents] = useState(events);
  const formattedDate = moment(date).format("MMMM D, YYYY");

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("New Event Name");
    if (title) {
      setCalendarEvents([
        ...calendarEvents,
        {
          start,
          end,
          title,
        },
      ]);
    }
  };

  const handleSelectEvent = (event) => {
    setIsModalOpen(true);
  };

  const onNextClick = useCallback(() => {
    if (view == "day") setDate(moment(date).add(1, "d").toDate());
    if (view == "week") setDate(moment(date).add(1, "w").toDate());
    if (view == "month") setDate(moment(date).add(1, "m").toDate());
  }, [view, date]);

  const onPrevClick = useCallback(() => {
    if (view == "day") setDate(moment(date).subtract(1, "d").toDate());
    if (view == "week") setDate(moment(date).subtract(1, "w").toDate());
    if (view == "month") setDate(moment(date).subtract(1, "m").toDate());
  }, [view, date]);
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2">
        <div className="flex flex-col sm:flex-row justify-start gap-6 my-6">
          <div className="flex justify-center items-center gap-4 cursor-pointer">
            <div
              className="border border-gray-300 px-4 py-3 rounded-sm"
              onClick={onPrevClick}
            >
              <FaAngleLeft />
            </div>
            <div>
              <span className="font-semibold">{formattedDate}</span>{" "}
              <span
                className="text-gray-600 pl-3"
                onClick={() => {
                  setDate(moment().toDate());
                  setView("day");
                }}
              >
                Today
              </span>
            </div>
            <div
              className="border border-gray-300 px-4 py-3 rounded-sm"
              onClick={onNextClick}
            >
              <FaAngleRight />
            </div>
          </div>
          <div className="flex justify-center items-center border-2 border-gray-300 w-fit rounded-lg cursor-pointer">
            <button
              className={`w-14 h-10 text-[14px] font-thin  ${
                view == "day"
                  ? "bg-secondary text-white"
                  : "bg-[#F3F4F6] text-black"
              } rounded-tl-md rounded-bl-md`}
              onClick={() => setView("day")}
            >
              Day
            </button>
            <button
              className={`w-14 h-10 text-[14px] font-thin ${
                view == "week"
                  ? "bg-secondary text-white"
                  : "bg-[#F3F4F6] text-black"
              } `}
              onClick={() => setView("week")}
            >
              Week
            </button>
            <button
              className={`w-14 h-10 text-[14px] font-thin ${
                view == "month"
                  ? "bg-secondary text-white"
                  : "bg-[#F3F4F6] text-black"
              } rounded-tr-md rounded-br-md`}
              onClick={() => setView("month")}
            >
              Month
            </button>
          </div>
        </div>
        <div>
          <Button
            variant="secondary"
            className="flex justify-start items-center rounded-full shadow-xl gap-3 text-white text-lg"
          >
            <FaPlus />
            Schedule session
          </Button>
        </div>
      </div>
      <div className="">
        <Calendar
          localizer={localizer}
          events={calendarEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700, margin: "50px" }}
          selectable
          onSelectSlot={handleSelectSlot} // Add new event on click
          onSelectEvent={handleSelectEvent} // Display event info on click
          defaultView="week"
          view={view}
          date={date}
          toolbar={false}
        />
      </div>


      <div className="flex justify-center">
      <Modal title="Basic Modal" centered open={isModalOpen}>
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
            <div className="w-16 h-10 sm:h-16 bg-secondary rounded-lg"></div>
            <div className="text-wrap">
              <p className="text-md font-bold">Kesariya</p>
              <p className="text-wrap">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </div>
          <div className="mt-4 flex justify-start items-start gap-4">
            <div className="w-16 h-10 sm:h-16 bg-secondary rounded-lg"></div>
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
    </div>
  );
};

export default SchedulerCalendar;
