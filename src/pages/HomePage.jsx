import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "../components/AlbumItem";
import SongItem from "../components/SongItem";
import DisplayNav from "../components/DisplayNav";

const HomePage = () => {
  return (
    <>
      <section className="h-[100%]  m-4 mr-8 ">
        <DisplayNav />
        <div className="py-1 mt-5">
          <h1 className="font-[var(--font-heading)] my-2 pl-2 font-black text-xl">
            TRENDING NOW
          </h1>
          <div className="flex overflow-auto gap-2 ">
            {songsData.map((item, index) => (
              <SongItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className="py-1 mt-5">
          <h1 className="font-[var(--font-heading)] my-2 pl-2 font-black text-xl">
            TOP ALBUMS
          </h1>
          <div className="flex overflow-auto gap-2">
            {albumsData.map((item, index) => (
              <AlbumItem
                key={index}
                name={item.name}
                desc={item.desc}
                image={item.image}
                id={item.id}
              />
            ))}
          </div>
        </div>

        <div className="py-1 mt-5">
          <h1 className="font-[var(--font-heading)] my-2 pl-2 font-black text-xl">
            TOP ARTISTS
          </h1>
          <div className="flex overflow-auto gap-2">
            {albumsData.map((item, index) => (
              <AlbumItem
                key={index}
                name={item.name}
                desc={item.desc}
                image={item.image}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
