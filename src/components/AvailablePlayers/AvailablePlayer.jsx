import React, { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayer = ({ playerPromise, setAvailableBlance, availableBlance, setPurchasedPlayers, purchasedPlayers }) => {
  const playerData = use(playerPromise);
  //console.log(playerData);

  return (
    <div className="w-11/12 mx-auto ">
      <div className="md:grid  md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {playerData.map((player) =><PlayerCard purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBlance={availableBlance} setAvailableBlance={setAvailableBlance} player={player}></PlayerCard> )}
      </div>
    </div>
  );
};

export default AvailablePlayer;
