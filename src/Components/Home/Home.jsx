import React, { useState, useContext } from 'react';
import { navigate } from '@reach/router';
import { GameContext } from '../../contexts/context';
import styles from './Home.module.css';

const Home = () => {
  const { dispatch } = useContext(GameContext);
  const [game, setGame] = useState({
    numberOfPlayers: 2,
    player1: '',
    player2: '',
    player3: '',
    player4: '',
  });
  const handleStartGame = () => {
    dispatch({
      type: 'START_GAME',
      game,
    });
    navigate('/game');
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.playerDetails}>
        <div className={styles.dropDownContainer}>
          <div>Select number of players:</div>
          <div className={styles.playerCountDropDown}>
            <select
              name=""
              id=""
              onChange={(e) => {
                e.preventDefault();
                setGame({
                  ...game,
                  numberOfPlayers: e.target.value,
                });
              }}
              value={game.numberOfPlayers}
            >
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
        </div>
        <div className={styles.playerForm}>
          {game.numberOfPlayers > 0 && (
          <div className={styles.playerInfo}>
            <input
              type="text"
              placeholder="Player1 name"
              onChange={(e) => {
                e.preventDefault();
                setGame({
                  ...game,
                  player1: e.target.value,
                });
              }}
            />
          </div>
          )}
          {game.numberOfPlayers > 1 && (
          <div className={styles.playerInfo}>
            <input
              type="text"
              placeholder="Player2 name"
              onChange={(e) => {
                e.preventDefault();
                setGame({
                  ...game,
                  player2: e.target.value,
                });
              }}
            />
          </div>
          )}
          {game.numberOfPlayers > 2 && (
          <div className={styles.playerInfo}>
            <input
              type="text"
              placeholder="Player3 name"
              onChange={(e) => {
                e.preventDefault();
                setGame({
                  ...game,
                  player3: e.target.value,
                });
              }}
            />
          </div>
          )}
          {game.numberOfPlayers > 3 && (
          <div className={styles.playerInfo}>
            <input
              type="text"
              placeholder="Player4 name"
              onChange={(e) => {
                e.preventDefault();
                setGame({
                  ...game,
                  player4: e.target.value,
                });
              }}
            />
          </div>
          )}
        </div>

        <div className={styles.submit}>
          <button onClick={handleStartGame} className={styles.submitBtn} type="button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
