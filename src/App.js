import "./App.css";
import { useContext } from "react";
import { PlayerContext } from "./context/PlayerContext";
import LogoNavbar from "./components/LogoNavbar";
import Sidebar from "./components/Sidebar";
import Display from "./components/Display";
import Player from "./components/Player";
import LoginPortal from "./pages/LoginPage";

function App() {
  const { audioRef, track, isLoginPortal} = useContext(PlayerContext);
console.log(isLoginPortal);
  return (
    <>
      <div className="main-container">
        <div className="nav-div">
          <LogoNavbar/>
        </div>
        <div className="sidebar-div">
          <Sidebar/>
        </div>
        <div className="content-div">
          <Display/>
        </div>
        <div className="player-div">
          <Player/>
          <audio ref={audioRef} preload="auto" src={track.file}></audio>
        </div>
      </div>
      {isLoginPortal ? <LoginPortal/> : undefined}
    </>
  );
}

export default App;
