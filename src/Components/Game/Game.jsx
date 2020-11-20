import React, { useContext } from 'react';
import { GameContext } from '../../contexts/context';
import Card from '../Card/Card';
import Dice from '../Bank/Dice/Dice';
import Players from '../Players/Players';
import FreeParkingIcon from '../../assets/free_parking_icon.png';
import JakeIcon from '../../assets/jake_icon.png';
import Go from '../CornerCard/Go/Go';
import Tax from '../Card/Tax/Tax';
import './Game.css';

const gameBlocks = require('../../data/gameBlocks.json');

const Game = () => {
  const getBottomLeftRowCards = (toIndex, fromIndex) => {
    const cardsArr = [];
    for (let i = toIndex; i >= fromIndex; i -= 1) {
      if (gameBlocks[i - 1].name === 'Community Chest') {
        cardsArr.push(<Card index={i} type="community" />);
      } else if (gameBlocks[i - 1].name === 'Chance') {
        cardsArr.push(<Card index={i} type="chance" />);
      } else if (gameBlocks[i - 1].name === 'City Tax') {
        cardsArr.push(<Tax type="income-tax" index={i} name="City Tax" pricetext={gameBlocks[i - 1].pricetext} />);
      } else if (gameBlocks[i - 1].name === 'LUXURY TAX') {
        cardsArr.push(<Tax type="income-tax" index={i} name="LUXURY TAX" pricetext={gameBlocks[i - 1].pricetext} />);
      } else if (gameBlocks[i - 1].groupNumber === 1) {
        cardsArr.push(
          <Card
            name={gameBlocks[i - 1].name}
            index={i}
            pricetext={gameBlocks[i - 1].pricetext}
            color=""
            type="railroad"
          />,
        );
      } else if (gameBlocks[i - 1].name === 'Electric Company') {
        cardsArr.push(
          <Card
            name={gameBlocks[i - 1].name}
            index={i}
            pricetext={gameBlocks[i - 1].pricetext}
            color=""
            type="utility electric"
          />,
        );
      } else if (gameBlocks[i - 1].name === 'Water Works') {
        cardsArr.push(
          <Card
            name={gameBlocks[i - 1].name}
            index={i}
            pricetext={gameBlocks[i - 1].pricetext}
            color=""
            type="utility waterworks"
          />,
        );
      } else {
        cardsArr.push(
          <Card
            name={gameBlocks[i - 1].name}
            index={i}
            pricetext={gameBlocks[i - 1].pricetext}
            color={gameBlocks[i - 1].colorName}
            type="property"
          />,
        );
      }
    }

    return cardsArr;
  };

  const getTopRightCards = (fromIndex, toIndex) => {
    const cardsArr = [];
    for (let i = fromIndex; i <= toIndex; i += 1) {
      if (gameBlocks[i - 1].name === 'Community Chest') {
        cardsArr.push(<Card index={i} type="community" />);
      } else if (gameBlocks[i - 1].name === 'Chance') {
        cardsArr.push(<Card index={i} type="chance" />);
      } else if (gameBlocks[i - 1].name === 'City Tax') {
        cardsArr.push(<Tax type="income-tax" index={i} name="City Tax" pricetext={gameBlocks[i - 1].pricetext} />);
      } else if (gameBlocks[i - 1].name === 'LUXURY TAX') {
        cardsArr.push(<Tax type="income-tax" index={i} name="LUXURY TAX" pricetext={gameBlocks[i - 1].pricetext} />);
      } else if (gameBlocks[i - 1].groupNumber === 1) {
        cardsArr.push(
          <Card
            name={gameBlocks[i - 1].name}
            index={i}
            pricetext={gameBlocks[i - 1].pricetext}
            color=""
            type="railroad"
          />,
        );
      } else if (gameBlocks[i - 1].name === 'Electric Company') {
        cardsArr.push(
          <Card
            name={gameBlocks[i - 1].name}
            index={i}
            pricetext={gameBlocks[i - 1].pricetext}
            color=""
            type="utility electric"
          />,
        );
      } else if (gameBlocks[i - 1].name === 'Water Works') {
        cardsArr.push(
          <Card
            name={gameBlocks[i - 1].name}
            index={i}
            pricetext={gameBlocks[i - 1].pricetext}
            color=""
            type="utility waterworks"
          />,
        );
      } else {
        cardsArr.push(
          <Card
            name={gameBlocks[i - 1].name}
            index={i}
            pricetext={gameBlocks[i - 1].pricetext}
            color={gameBlocks[i - 1].colorName}
            type="property"
          />,
        );
      }
    }

    return cardsArr;
  };

  const { gameState } = useContext(GameContext);
  return (
    <div className="table">
      <Players />
      <div className="board">
        <div className="center">
          <div className="community-chest-deck">
            <h2 className="label">Community Chest</h2>
            <div className="deck" />
          </div>
          <h1 className="game-title">MONOPOLY</h1>
          <div className="dice">
            <Dice />
          </div>
          <div className="chance-deck">
            <h2 className="label">Chance</h2>
            <div className="deck" />
          </div>
        </div>
        {/* index 1 */}
        <Go />

        <div className="row horizontal-row bottom-row">
          {getBottomLeftRowCards(10, 2).map((card) => card)}
          ;
        </div>

        {/* Index 11 */}
        <div className="space corner jail">
          <div className="container">
            <div className="name">Just</div>
            <div className="name">Visiting</div>
          </div>
          <div className="playerContainer">
            {gameState.player1.playing && gameState.player1.currentIndex === 11 && (
            <div className="player1">{gameState.player1.name}</div>
            )}
            {gameState.player2.playing && gameState.player2.currentIndex === 11 && (
            <div className="player2">{gameState.player2.name}</div>
            )}
            {gameState.player3.playing && gameState.player3.currentIndex === 11 && (
            <div className="player3">{gameState.player3.name}</div>
            )}
            {gameState.player4.playing && gameState.player4.currentIndex === 11 && (
            <div className="player4">{gameState.player4.name}</div>
            )}
          </div>
        </div>

        <div className="row vertical-row left-row">
          {getBottomLeftRowCards(20, 12).map((card) => card)}
          ;
        </div>

        {/* Index 21 */}
        <div className="space corner free-parking">
          <div className="container">
            <div className="name">Free</div>
            <i className="drawing fa fa-car">
              <img src={FreeParkingIcon} alt="freeParking" />
            </i>
            <div className="name">Parking</div>
          </div>
          <div className="playerContainer">
            {gameState.player1.playing && gameState.player1.currentIndex === 21 && (
              <div className="player1">{gameState.player1.name}</div>
            )}
            {gameState.player2.playing && gameState.player2.currentIndex === 21 && (
              <div className="player2">{gameState.player2.name}</div>
            )}
            {gameState.player3.playing && gameState.player3.currentIndex === 21 && (
              <div className="player3">{gameState.player3.name}</div>
            )}
            {gameState.player4.playing && gameState.player4.currentIndex === 21 && (
              <div className="player4">{gameState.player4.name}</div>
            )}
          </div>
        </div>

        <div className="row horizontal-row top-row">
          {getTopRightCards(22, 30).map((card) => card)}
          ;
        </div>

        {/* Index 31 */}
        <div className="space corner go-to-jail">
          <div className="container">
            <div className="name">Go To</div>
            <i className="drawing fa fa-gavel">
              <img src={JakeIcon} alt="goToJail" />
            </i>
            <div className="name">Jail</div>
          </div>
          <div className="playerContainer">
            {gameState.player1.playing && gameState.player1.currentIndex === 31 && (
              <div className="player1">{gameState.player1.name}</div>
            )}
            {gameState.player2.playing && gameState.player2.currentIndex === 31 && (
              <div className="player2">{gameState.player2.name}</div>
            )}
            {gameState.player3.playing && gameState.player3.currentIndex === 31 && (
              <div className="player3">{gameState.player3.name}</div>
            )}
            {gameState.player4.playing && gameState.player4.currentIndex === 31 && (
              <div className="player4">{gameState.player4.name}</div>
            )}
          </div>
        </div>

        <div className="row vertical-row right-row">
          {getTopRightCards(32, 40).map((card) => card)}
          ;
        </div>
      </div>
    </div>
  );
};

export default Game;
