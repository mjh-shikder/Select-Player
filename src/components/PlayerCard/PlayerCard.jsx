import React, { useState } from "react";
import profileImg from "../../assets/images/profile.png";
import flag from "../../assets/images/flag.png";

const PlayerCard = ({ player }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="card bg-base-100  shadow-sm p-4 ">
      <figure>
        <img
          className="w-full h-[300px] object-cover rounded-b-lg "
          src={player["playerImage"]}
          alt="Shoes"
        />
      </figure>
      <div className="mt-4  ">
        <div className="flex space-x-3 ">
          <img src={profileImg} alt="" />{" "}
          <h2 className="card-title  ">{player.playerName}</h2>
        </div>
        <div className="flex justify-between mt-4 border-b-1 border-gray-400 pb-2 ">
          <div className="flex items-center space-x-2  ">
            <img className="w-[20px] h-[20px] " src={flag} alt="" />
            <span>{player.playerCountry}</span>
          </div>

          <button className="btn ">{player.playingRole}</button>
        </div>
        <div>
          <h2 className="font-bold ">Rating: {player.rating}</h2>
          <div className="flex justify-between mb-2 mt-2 ">
            <h2 className="font-bold">{player.battingStyle}</h2>
            <h2 className="text-gray-500 ">{player.bowlingStyle}</h2>
          </div>
          <div className="flex justify-between ">
            <h2 className="font-bold">Price: ${player.price}</h2>
            <button disabled={isSelected} onClick={() => setIsSelected(true)} className="btn ">
              {isSelected ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
