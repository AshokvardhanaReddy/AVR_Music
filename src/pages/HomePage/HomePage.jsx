import { useContext, useEffect } from "react";
import ContentPageLayout from "../../components/ContentPageLayout/ContentPageLayout";
import { StoreContext } from "../../context/StoreContext";

const HomePage = () => {
  const {
    spotifyToken,
    trendingList,
    setTrendingList,
    topAlbums,
    setTopAlbums,
  } = useContext(StoreContext);
  async function fetchTopAlbums() {
    await fetch(
      "https://api.spotify.com/v1/search?q=telugu&type=album&market=IN&limit=30",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer  ${spotifyToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) =>
        setTopAlbums(
          data.albums.items.filter((album) => album.album_type === "album")
        )
      );
  }

  async function fetchTrendingList() {
    await fetch(
      "https://api.spotify.com/v1/search?q=telugu&type=track&market=IN&limit=30",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer  ${spotifyToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setTrendingList(data.tracks.items));
  }

  // console.table(trendingList);

  useEffect(() => {
    fetchTopAlbums();
    fetchTrendingList();
  }, []);

  return (
    <>
      <ContentPageLayout
        firstCaro="Trending Now"
        secondCaro="Top Albums"
        thirdCaro="Top Artists"
        songsList={topAlbums}
        trendingList = {trendingList}
      />

    </>
  );
};

export default HomePage;
