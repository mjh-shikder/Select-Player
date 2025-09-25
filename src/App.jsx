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
  const [toggle, setToggle] = useState(true)

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
      <div className="w-11/12 mx-auto flex items-center justify-between ">
        <h2 className="font-bold text-2xl  ">Available Players </h2>
        <div className="box-border ">
          <button onClick={()=>setToggle(true)}  className={`py-2 px-5 border-1 rounded-l-xl border-r-0 ${toggle===true?  "bg-[#e7fe29] text-black font-bold" :""}   `}>Available</button>
          <button onClick={()=>setToggle(false)} className={`py-2 px-5 border-1 rounded-r-xl border-l-0 ${toggle===false? "bg-[#e7fe29] text-black font-bold" :""} `}>Selected <span>(0)</span></button>
        </div>
    </div>

      {
        toggle === true? <Suspense fallback={ <span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayer playerPromise={playerPromise}></AvailablePlayer>
     </Suspense> : <SelectedPlayers></SelectedPlayers>
      }
     
      


      
    </>
  );
}

export default App;
