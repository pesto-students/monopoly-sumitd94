function startGame(state, game) {
  const newState = {
    ...state,
    numberOfPlayers: parseInt(game.numberOfPlayers, 10),
    player1: {
      ...state.player1,
      name: game.player1,
      playing: (game.player1 !== ''),
    },
    player2: {
      ...state.player2,
      name: game.player2,
      playing: (game.player2 !== ''),
    },
    player3: {
      ...state.player3,
      name: game.player3,
      playing: (game.player3 !== ''),
    },
    player4: {
      ...state.player4,
      name: game.player4,
      playing: (game.player4 !== ''),
    },
  };

  return newState;
}

function rollDice(state) {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  // const dice1 = 1;
  // const dice2 = 1;

  const playerPrevIndex = state[state.currentPlayerName].currentIndex;
  const currDiceVal = dice1 + dice2;
  let playerBalance = state[state.currentPlayerName].balance;
  let didPlayerCrossedGo = false;

  if (playerPrevIndex + currDiceVal > 40) {
    playerBalance += 200;
    didPlayerCrossedGo = true;
  }

  const newState = {
    ...state,
    dice1,
    dice2,
    diceRolledFlag: !state.diceRolledFlag,
    [state.currentPlayerName]: {
      ...state[state.currentPlayerName],
      currentIndex: (state[state.currentPlayerName].currentIndex + dice1 + dice2) % 40,
      diceRolled: true,
      balance: playerBalance,
      didPlayerCrossedGo,
    },
  };
  return newState;
}

function incrementPlayerNumber(currentPlayerNumber, maxPlayersAllowed) {
  if (currentPlayerNumber + 1 > maxPlayersAllowed) {
    return 1;
  }
  return currentPlayerNumber + 1;
}

function buyProperty(state, game) {
  const newState = {
    ...state,
    ...game,
  };
  return newState;
}
const nextTurn = (state) => {
  const currentPlayerNumber = incrementPlayerNumber(
    state.currentPlayerNumber,
    state.numberOfPlayers,
  );
  const currentPlayerName = `player${currentPlayerNumber}`;
  const newState = {
    ...state,
    currentPlayerNumber,
    currentPlayerName,
    player1: {
      ...state.player1,
      turn: false,
    },
    player2: {
      ...state.player2,
      turn: false,
    },
    player3: {
      ...state.player3,
      turn: false,
    },
    player4: {
      ...state.player4,
      turn: false,
    },
    [currentPlayerName]: {
      ...state[currentPlayerName],
      turn: true,
    },
  };
  return newState;
};
const payRent = (state, game) => buyProperty(state, game);

const movePlayer = (state, { playerId, newCardPositionIndex, playerShouldCollectGoMoney }) => {
  let { balance } = state[playerId];

  if (playerShouldCollectGoMoney) {
    balance += 200;
  }

  const newState = {
    ...state,
    diceRolledFlag: !state.diceRolledFlag,
    [playerId]: {
      ...state[playerId],
      currentIndex: newCardPositionIndex,
      balance,
    },
  };

  return newState;
};

const collectAmount = (state, { playerId, amount }) => {
  let { balance } = state[playerId];
  balance += amount;

  const currentPlayerNumber = incrementPlayerNumber(
    state.currentPlayerNumber,
    state.numberOfPlayers,
  );
  const currentPlayerName = `player${currentPlayerNumber}`;

  const newState = {
    ...state,
    currentPlayerNumber,
    currentPlayerName,
    [playerId]: {
      ...state[playerId],
      balance,
      turn: false,
      diceRolled: false,
    },
    [currentPlayerName]: {
      ...state[currentPlayerName],
      turn: true,
    },
  };

  return newState;
};

const GameReducer = (state, action) => {
  switch (action.type) {
    case 'START_GAME':
      return startGame(state, action.game);
    case 'ROLL_DICE':
      return rollDice(state);
    case 'BUY':
      return buyProperty(state, action.game);
    case 'PAY_RENT':
      return payRent(state, action.game);
    case 'NEXT_TURN':
      return nextTurn(state);
    case 'MOVE_PLAYER':
      return movePlayer(state, action.data);
    case 'COLLECT_AMOUNT':
      return collectAmount(state, action.data);
    default:
      return state;
  }
};

export default GameReducer;
