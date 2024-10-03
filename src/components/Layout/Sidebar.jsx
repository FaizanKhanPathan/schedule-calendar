import React, { useState } from "react";
import { RiHomeLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { MdMusicVideo } from "react-icons/md";
import { BsCopy } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { LuListMusic } from "react-icons/lu";
import { IoMusicalNote } from "react-icons/io5";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import { MdTablet } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { BsRadioactive } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineRadio } from "react-icons/md";
import { CiTrophy } from "react-icons/ci";


const Sidebar = () => {
  const [isSideBarMoreMenu, setIsSideBarMoreMenu] = useState({
    collection: false,
    stations: false,
    perfomance: false,
    isShowSidebar: false,
  });

  return (
    <>
      <span
        className=" absolute text-white text-4xl top-11 left-4 cursor-pointer"
        onClick={() =>
          setIsSideBarMoreMenu({
            ...isSideBarMoreMenu,
            isShowSidebar: true,
          })
        }
      >
        <GiHamburgerMenu className="px-2 bg-gray-900 rounded-md" />
      </span>
      <div
        className={`z-10 ${
          isSideBarMoreMenu?.isShowSidebar ? "left-[0px]" : "left-[-270px]"
        }  md:left-0 lg:left-0 sidebar fixed top-0 bottom-0 px-4 w-[270px] overflow-y-auto text-center bg-[white] py-24 shadow-2xl`}
      >
        <span
          className="absolute right-7 top-14 cursor-pointer md:hidden"
          onClick={() =>
            setIsSideBarMoreMenu({
              ...isSideBarMoreMenu,
              isShowSidebar: false,
            })
          }
        >
          <MdOutlineCancel className="text-2xl" />
        </span>
        <div className="p-1.5 mt-2 flex items-center rounded-full px-4 duration-300 cursor-pointer hover:bg-[#FFFAEF] text-secondary font-medium text-xl">
          <RiHomeLine className="text-xl" />
          <span className="text-[17px] font-medium ml-4">Home</span>
        </div>

        <div className="p-1.5 mt-2 flex items-center rounded-full px-4 duration-300 cursor-pointer hover:bg-[#FFFAEF] text-[black] text-xl">
          <BsPerson className="text-xl" />
          <span className="text-[17px] font-medium ml-4">Profile</span>
        </div>

        <div className="p-1.5 mt-2 flex items-center rounded-full px-4 duration-300 cursor-pointer hover:bg-[#FFFAEF] text-[black] text-xl">
          <MdMusicVideo className="text-xl" />
          <span className="text-[17px]  ml-4">Library</span>
        </div>

        <div className="p-1.5 mt-2 flex items-center rounded-full px-4 duration-300 cursor-pointer hover:bg-[#FFFAEF] text-[black] text-xl">
          <BsCopy className="text-xl" />
          <div
            className="flex justify-between items-center w-full"
            onClick={() =>
              setIsSideBarMoreMenu({
                ...isSideBarMoreMenu,
                collection: !isSideBarMoreMenu?.collection,
              })
            }
          >
            <span className="text-[17px] font-medium ml-4">Collection</span>
            <span
              className={
                isSideBarMoreMenu?.collection ? "rotate-0" : "rotate-180"
              }
            >
              <FaAngleDown />
            </span>
          </div>
        </div>
        {isSideBarMoreMenu?.collection && (
          <>
            <div className="text-left text-md text-gray-400 font-thin mt-2 w-4/5 mx-auto">
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <LuListMusic />
                </span>
                <span>Playlists</span>
              </h1>
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <IoMusicalNote />
                </span>
                <span>Tracks</span>
              </h1>
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <MdOutlineKeyboardVoice />
                </span>
                <span>Artists</span>
              </h1>
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <MdOutlineKeyboardVoice />
                </span>
                <span>Albums</span>
              </h1>
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <RiNeteaseCloudMusicFill />
                </span>
                <span>Genres</span>
              </h1>
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <MdTablet />
                </span>
                <span>Decades</span>
              </h1>
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <TbWorld />
                </span>
                <span>Geos</span>
              </h1>
            </div>
          </>
        )}

        <div className="p-1.5 mt-2 flex items-center rounded-full px-4 duration-300 cursor-pointer hover:bg-[#FFFAEF] text-[black] text-xl">
          <BsRadioactive className="text-xl" />
          <span className="text-[17px]  ml-4">Community</span>
        </div>

        <div className="p-1.5 mt-2 flex items-center rounded-full px-4 duration-300 cursor-pointer hover:bg-[#FFFAEF] text-[black] text-xl">
          <MdOutlineRadio className="text-2xl" />
          <div
            className="flex justify-between items-center w-full"
            onClick={() =>
              setIsSideBarMoreMenu({
                ...isSideBarMoreMenu,
                stations: !isSideBarMoreMenu?.stations,
              })
            }
          >
            <span className="text-[17px] font-medium ml-4">Stations</span>
            <span
              className={
                isSideBarMoreMenu?.stations ? "rotate-0" : "rotate-180"
              }
            >
              <FaAngleDown />
            </span>
          </div>
        </div>
        {isSideBarMoreMenu?.stations && (
          <>
            <div className="text-left text-md text-gray-400 font-thin mt-2 w-4/5 mx-auto">
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <LuListMusic />
                </span>
                <span>Playlists</span>
              </h1>
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <IoMusicalNote />
                </span>
                <span>Tracks</span>
              </h1>
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <MdOutlineKeyboardVoice />
                </span>
                <span>Artists</span>
              </h1>
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <MdOutlineKeyboardVoice />
                </span>
                <span>Albums</span>
              </h1>
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <RiNeteaseCloudMusicFill />
                </span>
                <span>Genres</span>
              </h1>
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <MdTablet />
                </span>
                <span>Decades</span>
              </h1>
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <TbWorld />
                </span>
                <span>Geos</span>
              </h1>
            </div>
          </>
        )}

        <div className="p-1.5 mt-2 flex items-center rounded-full px-4 duration-300 cursor-pointer hover:bg-[#FFFAEF] text-[black] text-xl">
          <CiTrophy className="text-2xl" />
          <div
            className="flex justify-between items-center w-full"
            onClick={() =>
              setIsSideBarMoreMenu({
                ...isSideBarMoreMenu,
                perfomance: !isSideBarMoreMenu?.perfomance,
              })
            }
          >
            <span className="text-[17px] font-medium ml-4">Perfomance</span>
            <span
              className={
                isSideBarMoreMenu?.perfomance ? "rotate-0" : "rotate-180"
              }
            >
              <FaAngleDown />
            </span>
          </div>
        </div>
        {isSideBarMoreMenu?.perfomance && (
          <>
            <div className="text-left text-md text-gray-400 font-thin mt-2 w-4/5 mx-auto">
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <LuListMusic />
                </span>
                <span>Playlists</span>
              </h1>
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <IoMusicalNote />
                </span>
                <span>Tracks</span>
              </h1>
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <MdOutlineKeyboardVoice />
                </span>
                <span>Artists</span>
              </h1>
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <MdOutlineKeyboardVoice />
                </span>
                <span>Albums</span>
              </h1>
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <RiNeteaseCloudMusicFill />
                </span>
                <span>Genres</span>
              </h1>
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <MdTablet />
                </span>
                <span>Decades</span>
              </h1>
              <h1 className="cursor-pointer pl-6 mt-1.5 flex justify-start items-center gap-2">
                <span>
                  <TbWorld />
                </span>
                <span>Geos</span>
              </h1>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
