import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

import {
  FaRegHeart,
  FaStepBackward,
  FaStepForward,
  FaPauseCircle,
  FaPlayCircle,
} from "react-icons/fa";
import { LuRepeat } from "react-icons/lu";
import { FaChartSimple } from "react-icons/fa6";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { FiMaximize2 } from "react-icons/fi";
import { GiMicrophone } from "react-icons/gi";

const Player = () => {
  const {
    track,
    playStatus,
    play,
    pause,
    previous,
    next,
    seekBar,
    seekBg,
    seekSong,
    time,
  } = useContext(PlayerContext);

  return (
    <div className="h-[86px] w-[95%] m-auto flex justify-between  items-center   sm : w-[100vw] sm:px-2 ">
      <div className="items-center gap-4 flex">
        <img className="w-12" src={track.image} alt="playing song" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      {/* className="flex flex-col items-center gap-1 m-auto border border-solid border-[gold]" */}
      <div className=" flex flex-col items-center">
        <div className="flex items-center gap-4">
          <FaRegHeart className="text-lg cursor-pointer sm:hidden " />
          <FaStepBackward
            className="text-lg cursor-pointer sm:text-base"
            onClick={previous}
          />
          {playStatus ? (
            <FaPauseCircle
              className="text-4xl text-[tomato] cursor-pointer sm:text-3xl"
              onClick={pause}
            />
          ) : (
            <FaPlayCircle
              className="text-4xl text-[tomato] cursor-pointer sm:text-3xl"
              onClick={play}
            />
          )}
          <FaStepForward
            className="text-lg cursor-pointer sm:text-base"
            onClick={next}
          />
          <LuRepeat className="text-lg cursor-pointer sm:hidden" />
        </div>

        <div className="flex items-center gap-5 sm:hidden ">
          <p>
            {time.currentTime.minute.toString().padStart(2, 0)}:
            {time.currentTime.second.toString().padStart(2, 0)}
          </p>
          <div
            onClick={seekSong}
            ref={seekBg}
            className="w-[60vw] max-w-[300px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>
            {time.totalTime.minute.toString().padStart(2, 0)}:
            {time.totalTime.second.toString().padStart(2, 0)}
          </p>
        </div>
      </div>

      <div className="hidden items-center gap-4 lg:flex">
        <FaChartSimple className="text-lg cursor-pointer" />
        <GiMicrophone className="text-lg cursor-pointer" />
        <HiOutlineSpeakerWave className="text-lg cursor-pointer" />
        <FiMaximize2 className="text-lg cursor-pointer" />
      </div>
    </div>
  );
};

export default Player;
