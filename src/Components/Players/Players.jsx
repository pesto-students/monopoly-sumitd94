/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import Aux from '../../hoc/Aux/Aux';
import { GameContext } from '../../contexts/context';
import Modal from './Modal/Modal';
import PlayerCards from './PlayerCards/PlayerCards';
import './Players.css';

const Players = () => {
  const { gameState } = useContext(GameContext);
  const [state, setState] = useState({ showModal: false, cardDetails: [] });

  const showModalHandler = (playerName) => {
    if (gameState[playerName].cardsPurchased.length === 0) {
      toast.info(`${gameState[playerName].name} has not purchased any cards yet`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setState({
        cardDetails: gameState[playerName].cardsPurchased,
        showModal: true,
      });
    }
  };

  const closeModalHandler = () => {
    setState({
      cardDetails: [],
      showModal: false,
    });
  };

  return (
    <Aux>
      <Modal show={state.showModal} closeModal={closeModalHandler}>
        <PlayerCards cardDetails={state.cardDetails} />
      </Modal>
      <div className="player-details">
        {gameState.player1.playing ? (
          <div
            className="player-1"
            onClick={() => { showModalHandler('player1'); }}
            style={{
              borderBottom: gameState.player1.turn
                ? '10px solid red'
                : '10px solid #ccc',
            }}
          >
            <div className="player-game__details">
              <h3 className="player-name">{`${gameState.player1.name}`}</h3>
              <p id="player__price">{`$${gameState.player1.balance}`}</p>
            </div>
          </div>
        ) : (
          ''
        )}
        {gameState.player2.playing ? (
          <div
            className="player-2"
            onClick={() => { showModalHandler('player2'); }}
            style={{
              borderBottom: gameState.player2.turn
                ? '10px solid yellow'
                : '10px solid #ccc',
            }}
          >
            <div className="player-game__details">
              <h3 className="player-name">{`${gameState.player2.name}`}</h3>
              <p id="player__price">{`$${gameState.player2.balance}`}</p>
            </div>
          </div>
        ) : (
          ''
        )}
        {gameState.player3.playing ? (
          <div
            className="player-3"
            onClick={() => { showModalHandler('player3'); }}
            style={{
              borderBottom: gameState.player3.turn
                ? '10px solid black'
                : '10px solid #ccc',
            }}
          >
            <div className="player-game__details">
              <h3 className="player-name">{`${gameState.player3.name}`}</h3>
              <p id="player__price">{`$${gameState.player3.balance}`}</p>
            </div>
          </div>
        ) : (
          ''
        )}
        {gameState.player4.playing ? (
          <div
            className="player-4"
            onClick={() => { showModalHandler('player4'); }}
            style={{
              borderBottom: gameState.player4.turn
                ? '10px solid green'
                : '10px solid #ccc',
            }}
          >
            <div className="player-game__details">
              <h3 className="player-name">{`${gameState.player4.name}`}</h3>
              <p id="player__price">{`$${gameState.player4.balance}`}</p>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </Aux>
  );
};

export default Players;
