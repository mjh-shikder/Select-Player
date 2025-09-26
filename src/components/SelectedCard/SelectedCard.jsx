import React from 'react';
import dltIcon from "./../../assets/images/Frame.png";

const SelectedCard = ({ player, removePlayer }) => {
   // console.log(player);
    const handleRemove = () => {
        removePlayer(player);
    }

    return (
        <div className="border-2 border-gray-200 mt-5 p-4 rounded-xl flex justify-between items-center ">
        <div className="flex items-center ">
          <img className="h-[60px] w-[60px] rounded-lg " src={player.playerImage} alt="" />
          <div className="ml-3 ">
            <h1 className="font-bold ">{player.playerName}</h1>
            <p className="text-xs text-gray-500">{player.playingRole}</p>
          </div>
        </div>
        <div onClick={handleRemove}>
          <img src={dltIcon} alt="" />
        </div>
      </div>
    );
};

export default SelectedCard;