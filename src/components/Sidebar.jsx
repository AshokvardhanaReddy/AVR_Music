import React from "react";
import { NavLink } from "react-router-dom";

import {
  FaUser,
  FaFolderOpen,
  FaMusic,
  FaRegHourglassHalf,
} from "react-icons/fa6";
import { FaHome, FaHeart } from "react-icons/fa";
import { IoTimer } from "react-icons/io5";

const Sidebar = () => {
  return (
    <section className="h-full lg:pt-8 lg:pl-8">
      <div className="w-full sm:px-2 sm:flex sm:justify-between md:px-8 md:py-4 md:flex md:justify-between">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[tomato] flex gap-2 place-items-center px-0 py-2 sm:flex-col"
              : "flex gap-2 place-items-center px-0 py-2 sm:flex-col"
          }
        >
          <i className="text-base flex place-items-center">
            <FaHome />
          </i>
          <p>Home</p>
        </NavLink>

        <NavLink
          to="/albums"
          className={({ isActive }) =>
            isActive
              ? "text-[tomato] flex gap-2 place-items-center px-0 py-2 sm:flex-col"
              : "flex gap-2 place-items-center px-0 py-2 sm:flex-col"
          }
        >
          <i className="text-base flex place-items-center">
            <FaFolderOpen />
          </i>
          <p>Albums</p>
        </NavLink>

        <NavLink
          to="/artists"
          className={({ isActive }) =>
            isActive
              ? "text-[tomato] flex gap-2 place-items-center px-0 py-2 sm:flex-col"
              : "flex gap-2 place-items-center px-0 py-2 sm:flex-col"
          }
        >
          <i className="text-base flex place-items-center">
            <FaUser />
          </i>
          <p>Artists</p>
          <FaRegHourglassHalf className="sm:hidden" />
        </NavLink>

        <NavLink
          to="/genres"
          className={({ isActive }) =>
            isActive
              ? "text-[tomato] flex gap-2 place-items-center px-0 py-2 sm:flex-col"
              : "flex gap-2 place-items-center px-0 py-2 sm:flex-col"
          }
        >
          <i className="text-base flex place-items-center">
            <FaMusic />
          </i>
          <p>Genres</p>
          <FaRegHourglassHalf className="sm:hidden" />
        </NavLink>

        <NavLink
          to="/recent-play"
          className={({ isActive }) =>
            isActive
              ? "text-[tomato] flex gap-2 place-items-center px-0 py-2 sm:flex-col"
              : "flex gap-2 place-items-center px-0 py-2 sm:flex-col"
          }
        >
          <i className="text-base flex place-items-center">
            <IoTimer />
          </i>
          <p>Recents</p>
        </NavLink>

        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            isActive
              ? "text-[tomato] flex gap-2 place-items-center px-0 py-2 sm:flex-col"
              : "flex gap-2 place-items-center px-0 py-2 sm:flex-col"
          }
        >
          <i className="text-base flex place-items-center">
            <FaHeart />
          </i>
          <p>Favourites</p>
          <FaRegHourglassHalf className="sm:hidden" />
        </NavLink>
      </div>
    </section>
  );
};

export default Sidebar;
