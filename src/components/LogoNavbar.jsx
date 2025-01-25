import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoSettingsSharp, IoLogOut } from "react-icons/io5";
import { MdQueueMusic } from "react-icons/md";

import logo from "../assets/AVR Music Logo.png";
import profile_pic from "../assets/user_profile_pic.png";
import { PlayerContext } from "../context/PlayerContext";

const MainNavbar = () => {
  const { token, setToken, user, setUser, setIsLoginPortal } =
    useContext(PlayerContext);
  const [isProfile, setIsProfie] = useState(false);
  const navigate = useNavigate();

  const handleProfile = () => {
    setIsProfie((prevState) => !prevState);
  };

  const handleProfileLogout = () => {
    setToken(false);
    setUser({});
    setIsProfie(false);
  };

  return (
    <section className="bg-[#ebeae6] relative">
      <div className="w-[95%] grid grid-cols-[auto_auto] justify-between items-center m-auto px-0 py-4">
        <img
          className="w-[180px] cursor-pointer"
          src={logo}
          alt="AVR Music Company Logo"
          onClick={() => navigate("/")}
        />
        {!token ? (
          <div
            className="grid grid-cols-2 items-center px-2 py-1 rounded cursor-pointer border border-solid border-[gray] hover:text-white hover:border-[tomato] hover:bg-[tomato]"
            onClick={() => setIsLoginPortal(true)}
          >
            <FaRegUserCircle className="bg-inherit text-xl sm:text-base" />
            <p className="bg-inherit">Login</p>
          </div>
        ) : (
          <div
            className="flex gap-2 items-center px-2 py-1 cursor-pointer  "
            onClick={handleProfile}
          >
            <img
              src={profile_pic}
              alt="User Profile"
              className="w-[35px] p-1 rounded-[50%] border-2 border-solid border-[grey] sm:w-[25px]"
            />
            <p className=" sm:hidden">{user.user_name}</p>
            {isProfile ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        )}
      </div>

      {isProfile ? (
        <div className=" absolute top-[110%] right-10 w-[15%] pl-4 py-2 rounded bg-white sm:w-[30%] sm:right-2">
          <div className="bg-inherit flex place-items-center gap-2 py-1 hover:text-[tomato] cursor-pointer">
            <FaRegUserCircle className="text-base bg-inherit" />
            <p className="bg-inherit">Profile</p>
          </div>
          <div className=" bg-inherit flex place-items-center gap-2 py-1 hover:text-[tomato] cursor-pointer">
            <MdQueueMusic className="text-base bg-inherit" />
            <p className="bg-inherit">My Music</p>
          </div>
          <div className="bg-inherit flex place-items-center gap-2 py-1 hover:text-[tomato] cursor-pointer">
            <IoSettingsSharp className="text-base bg-inherit" />
            <p className="bg-inherit">Settings</p>
          </div>
          <div
            className="bg-inherit flex place-items-center gap-2 py-1 text-[tomato] cursor-pointer"
            onClick={handleProfileLogout}
          >
            <IoLogOut className="text-base bg-inherit" />
            <p className="bg-inherit">Logout</p>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default MainNavbar;
