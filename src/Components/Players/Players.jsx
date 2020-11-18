import React, { useContext } from 'react';
import { GameContext } from '../../contexts/context';
import './Players.css';

const Players = () => {
  const { gameState } = useContext(GameContext);
  return (
    <div className="player-details">
      {gameState.player1.playing ? (
        <div className="player-1" style={{ borderBottom: gameState.player1.turn ? '10px solid red' : '10px solid #ccc' }}>
          <div className="player-game__details">
            <h3 className="player-name">{`${gameState.player1.name}`}</h3>
            <p id="player__price">{`$${gameState.player1.balance}`}</p>
          </div>
        </div>
      ) : ('')}
      {gameState.player2.playing ? (
        <div className="player-2" style={{ borderBottom: gameState.player2.turn ? '10px solid yellow' : '1px solid #ccc' }}>
          <div className="player-game__details">
            <h3 className="player-name">{`${gameState.player2.name}`}</h3>
            <p id="player__price">{`$${gameState.player2.balance}`}</p>
          </div>
        </div>
      ) : ('')}
      {gameState.player3.playing ? (
        <div className="player-3" style={{ borderBottom: gameState.player3.turn ? '10px solid black' : '1px solid #ccc' }}>
          <div className="player-game__details">
            <h3 className="player-name">{`${gameState.player3.name}`}</h3>
            <p id="player__price">{`$${gameState.player3.balance}`}</p>
          </div>
        </div>
      ) : ('')}
      {gameState.player4.playing ? (
        <div className="player-4" style={{ borderBottom: gameState.player4.turn ? '10px solid green' : '1px solid #ccc' }}>
          <div className="player-game__details">
            <h3 className="player-name">{`${gameState.player4.name}`}</h3>
            <p id="player__price">{`$${gameState.player4.balance}`}</p>
          </div>
        </div>
      ) : ('')}
    </div>
  );
};

export default Players;
