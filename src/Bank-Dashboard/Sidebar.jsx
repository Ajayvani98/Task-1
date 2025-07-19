import React from 'react';
import '../styles/Sidebar.css';
import {
  FaThLarge,
  FaExchangeAlt,
  FaUser,
  FaChartLine,
  FaCreditCard,
  FaUniversity,
  FaConciergeBell,
  FaGift,
  FaCog,
  FaQuestion,
} from 'react-icons/fa';

const menuItems = [
  ['Dashboard', <FaThLarge />],
  ['Transactions', <FaExchangeAlt />],
  ['Account', <FaUser />],
  ['Investments', <FaChartLine />],
  ['Credit Cards', <FaCreditCard />],
  ['Loans', <FaUniversity />],
  ['Services', <FaConciergeBell />],
  ['My Privileges', <FaGift />],
  ['Settings', <FaCog />],
  ['Help', <FaQuestion />],
];

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        {menuItems.map(([label, icon]) => (
          <li key={label}>
            <a href="#">
              <span className="icon">{icon}</span>
              <span className="label">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
