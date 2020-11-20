import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { GameContext } from '../../../contexts/context';

const Tax = ({
  type, index, name, pricetext,
}) => {
  // eslint-disable-next-line no-unused-vars
  const { gameState, dispatch } = useContext(GameContext);

  const playerOnCard = () => {
    const curPlayerDetails = gameState[gameState.currentPlayerName];
    return (curPlayerDetails.playing
      && curPlayerDetails.currentIndex === index
      && curPlayerDetails.turn
      && curPlayerDetails.diceRolled);
  };

  const payTax = (pay) => {
    if (pay) {
      const rentVal = index === 5 ? 200 : 75;
      const oldPlayerData = gameState[gameState.currentPlayerName];
      const gameData = {
        [gameState.currentPlayerName]: {
          ...oldPlayerData,
          balance: oldPlayerData.balance - rentVal,
          turn: false,
          diceRolled: false,
        },
      };

      const rentMsg = `You have paid $${rentVal} as tax`;
      toast.info(rentMsg, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      dispatch({
        type: 'PAY_RENT',
        game: gameData,
      });

      dispatch({
        type: 'NEXT_TURN',
        game: gameData,
      });
    }
  };

  useEffect(() => {
    if (playerOnCard()) {
      payTax(true);
    }

    return () => {
      payTax(false);
    };
    // eslint-disable-next-line
  }, [gameState.diceRolledFlag]);

  return (
    <div className={['space', 'fee', type].join(' ')}>
      <div className="container">
        <div className="name">{name}</div>
        <div className="diamond" />
        <div className="instructions">
          Pay
          {' '}
          {pricetext}
        </div>
        <div className="playerContainer">
          {gameState.player1.playing && gameState.player1.currentIndex === index && (
          <div className="player1">{gameState.player1.name}</div>
          )}
          {gameState.player2.playing && gameState.player2.currentIndex === index && (
          <div className="player2">{gameState.player2.name}</div>
          )}
          {gameState.player3.playing && gameState.player3.currentIndex === index && (
          <div className="player3">{gameState.player3.name}</div>
          )}
          {gameState.player4.playing && gameState.player4.currentIndex === index && (
          <div className="player4">{gameState.player4.name}</div>
          )}
        </div>
      </div>
    </div>
  );
};

Tax.propTypes = {
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  pricetext: PropTypes.string.isRequired,
};

export default Tax;
