import { useContext, useEffect } from "react";
import { albumsData, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

import { IoTimer } from "react-icons/io5";
import WorkPending from "../components/WorkPending";

const RecentlyPlayed = () => {
  //   const { id } = useParams();
  const { playWithId, token, setIsLoginPortal } = useContext(PlayerContext);
  const albumData = albumsData[0];

  useEffect(() => {
    if (!token) {
      setIsLoginPortal(true);
    }
  }, [token, setIsLoginPortal]);

  return (
    <>
      {token ? (
        <section className=" m-4 mr-8 pb-4 md:m-4 sm:m-2">
          <h2 className="bg-inherit text-xl font-black mb-4 md:text-2xl md:mb-3 sm:text-base sm:mb-1">
            RECENTYLY PLAYED :
          </h2>
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
      ) : (
        <WorkPending title="Kindly Login To See History" />
      )}
    </>
  );
};

export default RecentlyPlayed;
