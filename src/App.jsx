import { Suspense, useState } from "react";
import "./App.css";
import navImg from "./assets/images/logo.png";
import coin from "./assets/images/Currency.png";
import AvailablePlayer from "./components/AvailablePlayers/AvailablePlayer";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";


const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
  
}

function App() {
  const playerPromise = fetchPlayers()
  return (
    <>
      {/* Nabar */}
      <div className="navbar w-11/12 mx-auto ">
        <div className="flex-1">
          <a className=" text-xl">
            <img className="w-[60px] h-[60px] " src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center">
          <span className="mr-2">60000000000</span>
          <span className="mr-2">Coins </span>
          <img src={coin} alt="" />
        </div>
      </div>
      {/*  */}
      <div className="w-11/12 mx-auto">
        <h2>Available Players </h2>
        <div>
          <button></button>
        </div>
    </div>

      <Suspense fallback={ <span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayer playerPromise={playerPromise}></AvailablePlayer>
     </Suspense>
      


      <SelectedPlayers></SelectedPlayers>
    </>
  );
}

export default App;
