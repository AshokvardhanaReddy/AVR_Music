import { useContext } from "react";
import { albumsData, songsData } from "../assets/assets";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import DisplayNav from "./DisplayNav";

import { FaUsers } from "react-icons/fa";
import { MdQueueMusic } from "react-icons/md";
import { IoTimer } from "react-icons/io5";

const DisplayAlbum = () => {
  const { id } = useParams();
  const { playWithId } = useContext(PlayerContext);
  const albumData = albumsData[id];

  return (
    <>
      <section className="h-[100%]  m-4 mr-8 md:m-4 sm:m-2">
        <DisplayNav />
        <div className="bg-[lightgray] p-2 rounded mt-10 flex gap-8 md:mt-5 md:flex sm:mt-3 sm:gap-3">
          <img
            className="w-48 rounded md:w-36 sm:w-16 "
            src={albumData.image}
            alt="current album"
          />
          <div className="flex flex-col bg-inherit">
            <h2 className="bg-inherit text-4xl font-black mb-4 md:text-2xl md:mb-3 sm:text-base sm:mb-1">
              {albumData.name.toUpperCase()}
            </h2>
            <p className="bg-inherit">{albumData.desc}</p>
            <div className="bg-inherit flex gap-6 py-2 place-items-center sm:gap-2">
              <div className="bg-inherit flex gap-2 place-items-center sm:gap-1">
                <FaUsers className=" bg-inherit text-2xl  text-[tomato]" />
                <p className="bg-inherit">{"20,000"}+</p>
              </div>
              <div className=" bg-inherit flex gap-2 place-items-center sm:gap-1">
                <MdQueueMusic className=" bg-inherit text-2xl  text-[tomato]" />
                <p className="bg-inherit">50 Songs</p>
              </div>
              <div className=" bg-inherit flex gap-2 place-items-center sm:gap-1">
                <IoTimer className="bg-inherit text-xl  text-[tomato]" />
                <p className="bg-inherit">{"02 : 30"} Hr</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[gray] text-white rounded pl-2 mt-5 mb-2 py-[20px] grid gap-2 grid-cols-4 items-center sm:grid-cols-[60%_25%_15%] sm:justify-between">
          <p className="bg-inherit">
            <b className="bg-inherit pr-4 text-center">#</b> Title
          </p>
          <p className="bg-inherit">Album</p>
          <p className="bg-inherit sm:hidden">Date Added</p>
          <IoTimer className="bg-inherit text-xl text-center" />
        </div>
        {songsData.map((item, index) => {
          return (
            <div
              onClick={() => playWithId(item.id)}
              className="bg-[lightgray] hover:bg-[white] hover:text-[tomato] mb-2 rounded grid grid-cols-4 gap-2 p-2 items-center cursor-pointer sm:grid-cols-[60%_25%_15%] gap-2 p-2 items-center   cursor-pointer"
              key={index}
            >
              <p className="bg-inherit">
                <b className="mr-4 bg-inherit">{index + 1}</b>
                <img
                  className="rounded inline w-10 mr-5"
                  src={item.image}
                  alt="album song"
                />
                {item.name}
              </p>
              <p className="bg-inherit">{albumData.name}</p>
              <p className="bg-inherit sm:hidden">5 days ago</p>
              <p className="bg-inherit">{item.duration}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default DisplayAlbum;
