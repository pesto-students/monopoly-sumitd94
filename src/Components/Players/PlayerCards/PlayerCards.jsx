/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from './PlayerCards.module.css';

const PlayerCards = ({ cardDetails }) => {
  const cardLists = cardDetails.map((card, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <li key={index}>
      <div className={classNames.flipCard}>
        <div className={classNames.flipCardInner}>
          <div className={classNames.flipCardFront}>
            <div
              className={classNames[card.cardColor]}
            />
            <div className={classNames.propertyName}>
              {card.name}
            </div>
            <p className={classNames.cardPrices}>{`$${card.price}`}</p>
          </div>
          <div className={classNames.flipCardBack}>
            <div className={classNames.tradeBtnsContainer}>
              <div className={classNames.trade}>
                <button type="button" className={classNames.tradeBtns}>Trade</button>
              </div>
              <div className={classNames.mortgage}>
                <button type="button" className={classNames.tradeBtns}>Mortgage</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  ));

  return (
    <>
      <ul className={classNames.cardLists}>
        {cardLists}
      </ul>
    </>
  );
};

PlayerCards.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cardDetails: PropTypes.array,
};

export default PlayerCards;
