// src/components/Cards.jsx
import React from 'react';
import '../styles/Cards.css';
import {
  FaExchangeAlt,
  FaUser,
  FaUniversity,
  FaGift,
} from 'react-icons/fa';

const cards = [
  { name: 'Transactions', number: 456, icon: FaExchangeAlt },
  { name: 'Accounts', number: 789, icon: FaUser },
  { name: 'Loans', number: 102, icon: FaUniversity },
  { name: 'My Privileges', number: 103, icon: FaGift },
];

export default function Cards() {
  return (
    <div className="cards">
      {cards.map(({ name, number, icon: Icon }) => (
        <div className="card" key={name}>
          <div className="card-content">
            <div className="number">{number}</div>
            <div className="card-name">{name}</div>
          </div>
          <div className="icon-box">
            <Icon />
          </div>
        </div>
      ))}
    </div>
  );
}
