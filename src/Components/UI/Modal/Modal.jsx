import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { GameContext } from '../../../contexts/context';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

import './Modal.css';

const Modal = ({
  show, modalClosed, cardData, type, children, color, index, cardIcon,
}) => {
  const { gameState, dispatch } = useContext(GameContext);

  let isCardPurchased = false;
  let receiverName = '';
  let cardPurchasedByPlayerIndex = -1;

  if (gameState.cardsPurchasedBy.length > 0) {
    cardPurchasedByPlayerIndex = gameState.cardsPurchasedBy.findIndex(
      (element) => element.cardIndex === index,
    );
  }

  let rentVal = 0;
  if (cardData.groupNumber === 1) {
    rentVal = 25;
  } else if (cardData.groupNumber === 2) {
    rentVal = (gameState.dice1 + gameState.dice2) * parseInt(cardData.rent1, 10);
  } else {
    rentVal = parseInt(cardData.rent1, 10);
  }

  const handleBuy = () => {
    const oldPlayerData = gameState[gameState.currentPlayerName];
    const gameData = {
      [gameState.currentPlayerName]: {
        ...oldPlayerData,
        balance: oldPlayerData.balance - cardData.price,
        cardsPurchased: [...oldPlayerData.cardsPurchased, {
          ...cardData,
          cardColor: color,
        }],
        turn: false,
        diceRolled: false,
      },
      cardsPurchasedBy: [
        ...gameState.cardsPurchasedBy,
        {
          cardIndex: index,
          purchasedByPlayer: gameState.currentPlayerName,
          groupNumber: cardData.groupNumber,
        },
      ],
    };
    const purchaseMsg = `Wohoo! you have successfully purchased ${cardData.name}`;

    toast.success(purchaseMsg, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    dispatch({
      type: 'BUY',
      game: gameData,
    });

    dispatch({
      type: 'NEXT_TURN',
      game: gameData,
    });
    modalClosed();
  };

  const payRent = () => {
    const oldPlayerData = gameState[gameState.currentPlayerName];
    const ownerName = gameState.cardsPurchasedBy[cardPurchasedByPlayerIndex].purchasedByPlayer;
    const ownerData = gameState[ownerName];
    const gameData = {
      [gameState.currentPlayerName]: {
        ...oldPlayerData,
        balance: oldPlayerData.balance - rentVal,
        turn: false,
        diceRolled: false,
      },
      [ownerName]: {
        ...ownerData,
        balance: ownerData.balance + rentVal,
      },
    };

    const rentMsg = `You have paid $${rentVal} to ${ownerData.name}`;
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
    modalClosed();
  };

  const handlePass = () => {
    const oldPlayerData = gameState[gameState.currentPlayerName];
    const gameData = {
      [gameState.currentPlayerName]: {
        ...oldPlayerData,
        turn: false,
        diceRolled: false,
      },
    };
    dispatch({
      type: 'NEXT_TURN',
      game: gameData,
    });
    modalClosed();
  };

  let modalContent = '';

  if (type === 'chance' || type === 'community') {
    modalContent = (
      <div className="Modal_Content">
        {children}
        <div className="Modal_buttons">
          <button type="button" className="Pass" onClick={handlePass}>
            End Turn
          </button>
        </div>
      </div>
    );
  } else {
    modalContent = (
      <div className="Modal_Content">
        {color && (
          <div className={['Modal_color_header', color].join(' ')} />
        )}
        <div className="cardPreview">
          {cardIcon && (
            <i>
              <img src={cardIcon} alt={type} />
            </i>
          )}
        </div>
        <h1>
          {cardData.name}
          <br />
          $
          {cardData.price}
        </h1>
        <div className="Modal_buttons">
          <button type="button" className="Buy" onClick={handleBuy}>
            Buy
          </button>
          <button type="button" className="Pass" onClick={handlePass}>
            Pass
          </button>
        </div>
      </div>
    );
  }

  if (cardPurchasedByPlayerIndex !== -1 && receiverName !== gameState.currentPlayerName
    && gameState[gameState.currentPlayerName].turn) {
    receiverName = gameState.cardsPurchasedBy[cardPurchasedByPlayerIndex].purchasedByPlayer;
    isCardPurchased = true;
  }

  if (isCardPurchased) {
    const propertyOwenerName = gameState[
      gameState.cardsPurchasedBy[cardPurchasedByPlayerIndex].purchasedByPlayer
    ].name;
    modalContent = (
      <div className="Modal_Content">
        <p>
          you have to pay
          {rentVal}
          {' '}
          to
          {' '}
          {propertyOwenerName}
        </p>
        <div className="Modal_buttons">
          <button type="button" className="Buy" onClick={payRent}>Pay</button>
        </div>
      </div>
    );
  }

  return (
    <Aux>
      <Backdrop show={show} closeModal={() => { }} />
      <div
        className="Modal"
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {modalContent}
      </div>
    </Aux>
  );
};

Modal.defaultProps = {
  color: null,
  cardData: {
    price: 0,
  },
  type: 'property',
  cardIcon: null,
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  cardData: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    rent1: PropTypes.number,
    groupNumber: PropTypes.number,
  }),
  color: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  modalClosed: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  cardIcon: PropTypes.string,
};

export default Modal;
