import React, { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { GameContext } from '../../../contexts/context';

const Go = () => {
  const { gameState } = useContext(GameContext);

  const showToast = (show) => {
    if (show) {
      const goMessage = 'WoHoo, you have received $200';
      toast.info(goMessage, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    if (gameState[gameState.currentPlayerName].didPlayerCrossedGo) {
      showToast(true);
    }

    return () => {
      showToast(false);
    };
    // eslint-disable-next-line
  }, [gameState.diceRolledFlag]);

  return (
    <div className="space corner go">
      <div className="container">
        <div className="instructions">
          Collect $200.00 salary as you pass
        </div>
        <div className="go-word">go</div>
      </div>
      <div className="playerContainer">
        {gameState.player1.playing && gameState.player1.currentIndex === 1 && (
          <div className="player1">{gameState.player1.name}</div>
        )}
        {gameState.player2.playing && gameState.player2.currentIndex === 1 && (
          <div className="player2">{gameState.player2.name}</div>
        )}
        {gameState.player3.playing && gameState.player3.currentIndex === 1 && (
          <div className="player3">{gameState.player3.name}</div>
        )}
        {gameState.player4.playing && gameState.player4.currentIndex === 1 && (
          <div className="player4">{gameState.player4.name}</div>
        )}
      </div>
    </div>
  );
};

export default Go;
