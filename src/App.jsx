import { Suspense, useState } from "react";
import "./App.css";
import navImg from "./assets/images/logo.png";
import coin from "./assets/images/Currency.png";
import AvailablePlayer from "./components/AvailablePlayers/AvailablePlayer";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Navbar from "./components/Navbar/Navbar";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const playerPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBlance, setAvailableBlance] = useState(1000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = (p) => {
    const filterData = purchasedPlayers.filter(
      (ply) => ply.playerName !== p.playerName);
    console.log(filterData);
    setPurchasedPlayers(filterData)
    
    setAvailableBlance(availableBlance+p.price)

  };

  return (
    <>
      <Navbar availableBlance={availableBlance}></Navbar>

      {/*  */}
      <div className="w-11/12 mx-auto flex items-center justify-between ">
        <h2 className="font-bold text-2xl  ">
          {toggle
            ? "Available Plyers"
            : `Selected Players (${purchasedPlayers.length}/6)`}
        </h2>
        <div className="box-border ">
          <button
            onClick={() => setToggle(true)}
            className={`py-2 px-5 border-1 rounded-l-xl border-r-0 ${
              toggle === true ? "bg-[#e7fe29] text-black font-bold" : ""
            }   `}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-2 px-5 border-1 rounded-r-xl border-l-0 ${
              toggle === false ? "bg-[#e7fe29] text-black font-bold" : ""
            } `}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayer
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            availableBlance={availableBlance}
            setAvailableBlance={setAvailableBlance}
            playerPromise={playerPromise}
          ></AvailablePlayer>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}
    </>
  );
}

export default App;
