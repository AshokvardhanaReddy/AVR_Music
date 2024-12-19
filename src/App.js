import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Navbar from "./pages/Navbar/Navbar";

import {Routes, Route} from "react-router-dom";

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path = "/" element = {<></>} />
    <Route path = "/albums" element = {<></>} />
    <Route path = "/artists" element = {<></>} />
    <Route path = "/genres" element = {<></>} />
    <Route path = "/recent-play" element = {<></>} />
    <Route path = "/favourites" element = {<></>} />
   </Routes>
   
   </>
  );
}

export default App;
