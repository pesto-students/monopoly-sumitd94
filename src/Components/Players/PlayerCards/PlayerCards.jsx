/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux/Aux';
import classNames from './PlayerCards.module.css';

const PlayerCards = ({ cardDetails }) => {
  const cardLists = cardDetails.map((card, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <li key={index}>
      <div className={classNames.CardContainer}>
        <div
          className={classNames[card.cardColor]}
        />
        <div className={classNames.propertyName}>
          {card.name}
        </div>
        <p className={classNames.cardPrices}>{`$${card.price}`}</p>
      </div>
    </li>
  ));

  return (
    <Aux>
      <ul className={classNames.cardLists}>
        {cardLists}
      </ul>
    </Aux>
  );
};

PlayerCards.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cardDetails: PropTypes.array,
};

export default PlayerCards;
