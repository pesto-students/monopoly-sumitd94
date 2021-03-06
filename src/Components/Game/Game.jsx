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

const Game = () => {
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
          <Card
            name="Connecticut Avenue"
            index={10}
            pricetext="$120"
            color="light-blue"
            type="property"
          />
          <Card
            name="Vermont Avenue"
            index={9}
            pricetext="Price $100"
            color="light-blue"
            type="property"
          />
          {/* Index 8 */}
          <Card index={8} type="chance" />
          <Card
            name="Oriental Avenue"
            index={7}
            pricetext="$100"
            color="light-blue"
            type="property"
          />
          <Card
            name="Reading Railroad"
            index={6}
            pricetext="$200"
            color=""
            type="railroad"
          />

          {/* Index 5 */}
          <Tax type="income-tax" index={5} name="City Tax" pricetext="$200" />
          <Card
            name="Baltic Avenue"
            index={4}
            pricetext="$60"
            color="brown"
            type="property"
          />
          {/* Index 3 */}
          <Card index={3} type="community" />
          <Card
            name="Mediterranean Avenue"
            index={2}
            pricetext="$60"
            color="brown"
            type="property"
          />
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
          {/* <Card name="City Tax" pricetext="Pay $200" color="" type="chance" />
            <Card name="Pacific Avenue" pricetext="$300" color="green" type="property" />
            <Card name="North Carolina Avenue" pricetext="$300" color="green" type="property" />
            <Card name="Pennsylvania Avenue" pricetext="$320" color="green" type="property" />
            <Card name="Short Line" pricetext="$200" color="" type="property" />
            <Card name="Park Place" pricetext="$350" color="light-blue" type="property" />
            <Card name="LUXURY TAX" pricetext="Pay $100" color="" type="chance" />
            <Card name="Boardwalk" pricetext="$400" color="light-blue" type="property" /> */}

          <Card
            name="New York Avenue"
            index={20}
            pricetext="$200"
            color="orange"
            type="property"
          />

          <Card
            name="Tennessee Avenue"
            index={19}
            pricetext="$180"
            color="orange"
            type="property"
          />

          {/* Index 18 */}
          <Card index={18} type="community" />
          <Card
            name="St. James Place"
            index={17}
            pricetext="$180"
            color="orange"
            type="property"
          />
          <Card
            name="Pennsylvania Railroad"
            index={16}
            pricetext="$200"
            color=""
            type="railroad"
          />

          <Card
            name="Virginia Avenue"
            index={15}
            pricetext="$160"
            color="pink"
            type="property"
          />

          <Card
            name="States Avenue"
            index={14}
            pricetext="$140"
            color="pink"
            type="property"
          />

          <Card
            name="Electric Company"
            index={13}
            pricetext="$150"
            color=""
            type="utility electric"
          />

          <Card
            name="St. Charles Place"
            index={12}
            pricetext="$140"
            color="pink"
            type="property"
          />
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
          <Card
            name="Kentucky Avenue"
            index={22}
            pricetext="$220"
            color="red"
            type="property"
          />

          {/* Index 23 */}
          <Card index={23} type="chance" />
          <Card
            name="Indiana Avenue"
            index={24}
            pricetext="$220"
            color="red"
            type="property"
          />
          <Card
            name="Illinois Avenue"
            index={25}
            pricetext="$240"
            color="red"
            type="property"
          />
          <Card
            name="B&O Railroad"
            index={26}
            pricetext="$200"
            color=""
            type="railroad"
          />
          <Card
            name="Atlantic Avenue"
            index={27}
            pricetext="$260"
            color="yellow"
            type="property"
          />

          <Card
            name="Ventnor Avenue"
            index={28}
            pricetext="$260"
            color="yellow"
            type="property"
          />

          <Card
            name="Water Works"
            index={29}
            pricetext="$150"
            color=""
            type="utility waterworks"
          />

          <Card
            name="Marvin Gardens"
            index={30}
            pricetext="$280"
            color="yellow"
            type="property"
          />
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
          <Card
            name="Pacific Avenue"
            index={32}
            pricetext="$300"
            color="green"
            type="property"
          />
          <Card
            name="North Carolina Avenue"
            index={33}
            pricetext="$300"
            color="green"
            type="property"
          />

          {/* Index 34 */}
          <Card index={34} type="community" />

          <Card
            name="Pennsylvania Avenue"
            index={35}
            pricetext="$200"
            color="green"
            type="property"
          />
          <Card
            name="Short Line"
            index={36}
            pricetext="$200"
            color=""
            type="railroad"
          />

          {/* Index 37 */}
          <Card index={37} type="chance" />

          <Card
            name="Park Place"
            index={38}
            pricetext="$360"
            color="dark-blue"
            type="property"
          />

          {/* Index 39 */}
          <Tax type="income-tax" index={39} name="LUXURY TAX" pricetext="$75" />
          <Card
            name="Boardwalk"
            index={40}
            pricetext="$400"
            color="dark-blue"
            type="property"
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
